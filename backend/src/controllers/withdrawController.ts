import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { TransactionStatus, TransactionType, WalletType, NetworkType } from '@prisma/client';

const withdrawSchema = z.object({
  amount: z.number().positive(),
  address: z.string().min(6),
  network: z.nativeEnum(NetworkType)
});

const createWithdrawal = async (req: AuthedRequest, walletType: WalletType) => {
  const { amount, address, network } = withdrawSchema.parse(req.body);
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user?.id, type: walletType } });
  if (!wallet || Number(wallet.balance) < amount) {
    throw new Error('Insufficient balance');
  }

  return prisma.$transaction(async (tx) => {
    await tx.wallet.update({ where: { id: wallet.id }, data: { balance: { decrement: amount } } });
    const withdrawal = await tx.withdrawal.create({
      data: {
        userId: req.user!.id,
        amount,
        address,
        network,
        status: TransactionStatus.PENDING,
        walletType
      }
    });
    await tx.transaction.create({
      data: {
        userId: req.user!.id,
        type: TransactionType.WITHDRAWAL,
        amount,
        status: TransactionStatus.PENDING,
        metadata: { walletType }
      }
    });
    return withdrawal;
  });
};

export const withdrawIncome = async (req: AuthedRequest, res: Response) => {
  try {
    const withdrawal = await createWithdrawal(req, WalletType.INCOME);
    return res.json({ withdrawal });
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export const withdrawCapital = async (req: AuthedRequest, res: Response) => {
  try {
    const withdrawal = await createWithdrawal(req, WalletType.PACKAGE);
    return res.json({ withdrawal });
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export const withdrawReport = async (req: AuthedRequest, res: Response) => {
  const report = await prisma.withdrawal.findMany({ where: { userId: req.user?.id } });
  return res.json({ report });
};
