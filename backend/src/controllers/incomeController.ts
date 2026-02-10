import { Response } from 'express';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';

export const affiliateIncome = async (req: AuthedRequest, res: Response) => {
  const income = await prisma.incomeLog.findMany({ where: { userId: req.user?.id, category: 'Affiliate' } });
  return res.json({ income });
};

export const tradingIncome = async (req: AuthedRequest, res: Response) => {
  const income = await prisma.incomeLog.findMany({ where: { userId: req.user?.id, category: 'Trading' } });
  return res.json({ income });
};

export const incomeSummary = async (req: AuthedRequest, res: Response) => {
  const income = await prisma.incomeLog.findMany({ where: { userId: req.user?.id } });
  return res.json({ income });
};
