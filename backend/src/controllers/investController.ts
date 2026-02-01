import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const investSchema = z.object({
  amount: z.number().positive()
});

export const invest = async (req: AuthRequest, res: Response) => {
  const payload = investSchema.parse(req.body);
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user!.id, type: 'INCOME' } });
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }
  if (Number(wallet.balance) < payload.amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  await prisma.$transaction([
    prisma.wallet.update({
      where: { id: wallet.id },
      data: { balance: { decrement: payload.amount } }
    }),
    prisma.investment.create({
      data: { userId: req.user!.id, amount: payload.amount, roi: 0.15, status: 'COMPLETED' }
    })
  ]);

  return res.json({ message: 'Investment created' });
};

export const investReport = async (req: AuthRequest, res: Response) => {
  const report = await prisma.investment.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(report);
};
