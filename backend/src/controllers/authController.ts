import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { comparePassword, generateAccessToken, generateRefreshToken, hashPassword } from '../utils/auth';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
  referralCode: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const refreshSchema = z.object({
  refreshToken: z.string()
});

export const register = async (req: Request, res: Response) => {
  const payload = registerSchema.parse(req.body);
  const existing = await prisma.user.findUnique({ where: { email: payload.email } });
  if (existing) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const referralCode = `REF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      passwordHash: await hashPassword(payload.password),
      phone: payload.phone,
      referralCode,
      referredBy: payload.referralCode
    }
  });

  await prisma.wallet.createMany({
    data: [
      { userId: user.id, type: 'INCOME', balance: 0 },
      { userId: user.id, type: 'PACKAGE', balance: 0 }
    ]
  });

  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  const refreshToken = generateRefreshToken({ id: user.id, email: user.email });

  return res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken
  });
};

export const login = async (req: Request, res: Response) => {
  const payload = loginSchema.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const valid = await comparePassword(payload.password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  const refreshToken = generateRefreshToken({ id: user.id, email: user.email });

  return res.json({
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken
  });
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = refreshSchema.parse(req.body);
  try {
    const decoded = jwt.verify(refreshToken, env.jwtRefreshSecret) as {
      id: string;
      email: string;
    };
    const accessToken = generateAccessToken({ id: decoded.id, email: decoded.email });
    return res.json({ accessToken });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};

export const logout = async (_req: Request, res: Response) => {
  return res.json({ message: 'Logged out' });
};

export const me = async (req: Request, res: Response) => {
  const userId = (req as Request & { user?: { id: string } }).user?.id;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json({ id: user.id, name: user.name, email: user.email, phone: user.phone });
};
