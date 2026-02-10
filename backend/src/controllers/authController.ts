import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { hashPassword, comparePassword } from '../utils/password';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { WalletType } from '@prisma/client';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
  referredBy: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const register = async (req: Request, res: Response) => {
  const payload = registerSchema.parse(req.body);
  const existing = await prisma.user.findUnique({ where: { email: payload.email } });
  if (existing) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const referralCode = `NEO${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const passwordHash = await hashPassword(payload.password);

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      passwordHash,
      phone: payload.phone,
      referralCode,
      referredBy: payload.referredBy
    }
  });

  await prisma.wallet.createMany({
    data: [
      { userId: user.id, type: WalletType.INCOME, balance: 0 },
      { userId: user.id, type: WalletType.PACKAGE, balance: 0 }
    ]
  });

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  return res.status(201).json({ user, accessToken, refreshToken });
};

export const login = async (req: Request, res: Response) => {
  const payload = loginSchema.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValid = await comparePassword(payload.password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  return res.json({ user, accessToken, refreshToken });
};

export const refresh = async (req: Request, res: Response) => {
  const schema = z.object({ refreshToken: z.string() });
  const { refreshToken } = schema.parse(req.body);

  try {
    const payload = verifyRefreshToken(refreshToken);
    const accessToken = signAccessToken({ sub: payload.sub, role: payload.role });
    return res.json({ accessToken });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};

export const logout = async (_req: Request, res: Response) => {
  return res.json({ message: 'Logged out' });
};
