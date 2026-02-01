import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { TransactionStatus, TransactionType, WalletType } from '@prisma/client';

const investSchema = z.object({
  amount: z.number().positive()
});

export const invest = async (req: AuthedRequest, res: Response) => {
  const { amount } = investSchema.parse(req.body);
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user?.id, type: WalletType.INCOME } });
  if (!wallet || Number(wallet.balance) < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  const investment = await prisma.$transaction(async (tx) => {
    await tx.wallet.update({ where: { id: wallet.id }, data: { balance: { decrement: amount } } });
    const record = await tx.investment.create({
      data: {
        userId: req.user!.id,
        amount,
        roi: 0.18,
        status: TransactionStatus.PENDING
      }
    });
    await tx.transaction.create({
      data: {
        userId: req.user!.id,
        type: TransactionType.INVESTMENT,
        amount,
        status: TransactionStatus.PENDING
      }
    });
    return record;
  });

  return res.json({ investment });
};

export const investReport = async (req: AuthedRequest, res: Response) => {
  const report = await prisma.investment.findMany({ where: { userId: req.user?.id } });
  return res.json({ report });
};
