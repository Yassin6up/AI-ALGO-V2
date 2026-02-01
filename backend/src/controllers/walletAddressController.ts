import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { NetworkType } from '@prisma/client';

const addSchema = z.object({
  network: z.nativeEnum(NetworkType),
  address: z.string().min(6)
});

export const sendOtp = async (_req: AuthedRequest, res: Response) => {
  return res.json({ message: 'OTP sent (mock)' });
};

export const verifyOtp = async (_req: AuthedRequest, res: Response) => {
  return res.json({ message: 'OTP verified (mock)' });
};

export const addAddress = async (req: AuthedRequest, res: Response) => {
  const { network, address } = addSchema.parse(req.body);
  const record = await prisma.walletAddress.create({
    data: {
      userId: req.user!.id,
      network,
      address,
      isVerified: true
    }
  });
  return res.status(201).json({ record });
};

export const listAddresses = async (req: AuthedRequest, res: Response) => {
  const addresses = await prisma.walletAddress.findMany({ where: { userId: req.user?.id } });
  return res.json({ addresses });
};
