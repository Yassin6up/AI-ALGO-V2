import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const activateSchema = z.object({
  fee: z.number().positive().default(125)
});

export const activateBot = async (req: AuthRequest, res: Response) => {
  const payload = activateSchema.parse(req.body);
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user!.id, type: 'PACKAGE' } });
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }
  if (Number(wallet.balance) < payload.fee) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  await prisma.$transaction([
    prisma.wallet.update({
      where: { id: wallet.id },
      data: { balance: { decrement: payload.fee } }
    }),
    prisma.botActivation.create({
      data: { userId: req.user!.id, fee: payload.fee, status: 'COMPLETED' }
    })
  ]);

  return res.json({ message: 'Bot activated' });
};

export const botReport = async (req: AuthRequest, res: Response) => {
  const report = await prisma.botActivation.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(report);
};
