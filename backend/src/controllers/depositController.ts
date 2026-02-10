import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { TransactionStatus, TransactionType } from '@prisma/client';

const depositSchema = z.object({
  amount: z.number().positive(),
  method: z.string().min(2)
});

export const createDeposit = async (req: AuthedRequest, res: Response) => {
  const { amount, method } = depositSchema.parse(req.body);
  const deposit = await prisma.deposit.create({
    data: {
      userId: req.user!.id,
      amount,
      method,
      status: TransactionStatus.PENDING
    }
  });
  await prisma.transaction.create({
    data: {
      userId: req.user!.id,
      type: TransactionType.DEPOSIT,
      amount,
      status: TransactionStatus.PENDING
    }
  });
  return res.status(201).json({ deposit });
};

export const depositHistory = async (req: AuthedRequest, res: Response) => {
  const history = await prisma.deposit.findMany({ where: { userId: req.user?.id } });
  return res.json({ history });
};
