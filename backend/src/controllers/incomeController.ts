import { Response } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

export const affiliateIncome = async (req: AuthRequest, res: Response) => {
  const data = await prisma.incomeLog.findMany({
    where: { userId: req.user!.id, category: 'affiliate' },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(data);
};

export const tradingIncome = async (req: AuthRequest, res: Response) => {
  const data = await prisma.incomeLog.findMany({
    where: { userId: req.user!.id, category: 'trading' },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(data);
};

export const incomeSummary = async (req: AuthRequest, res: Response) => {
  const [affiliate, trading] = await Promise.all([
    prisma.incomeLog.aggregate({
      where: { userId: req.user!.id, category: 'affiliate' },
      _sum: { amount: true }
    }),
    prisma.incomeLog.aggregate({
      where: { userId: req.user!.id, category: 'trading' },
      _sum: { amount: true }
    })
  ]);

  return res.json({
    affiliate: affiliate._sum.amount ?? 0,
    trading: trading._sum.amount ?? 0
  });
};
