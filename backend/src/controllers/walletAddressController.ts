import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const addressSchema = z.object({
  network: z.string(),
  address: z.string(),
  otp: z.string().optional()
});

export const sendOtp = async (_req: AuthRequest, res: Response) => {
  return res.json({ message: 'OTP sent', otp: '123456' });
};

export const verifyOtp = async (_req: AuthRequest, res: Response) => {
  return res.json({ message: 'OTP verified' });
};

export const addAddress = async (req: AuthRequest, res: Response) => {
  const payload = addressSchema.parse(req.body);
  const address = await prisma.walletAddress.create({
    data: {
      userId: req.user!.id,
      network: payload.network,
      address: payload.address,
      isVerified: true
    }
  });
  return res.status(201).json(address);
};

export const listAddresses = async (req: AuthRequest, res: Response) => {
  const addresses = await prisma.walletAddress.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(addresses);
};
