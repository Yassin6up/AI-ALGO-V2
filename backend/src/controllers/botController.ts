import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { TransactionStatus, TransactionType, WalletType } from '@prisma/client';

const activationSchema = z.object({
  fee: z.number().positive()
});

export const activateBot = async (req: AuthedRequest, res: Response) => {
  const { fee } = activationSchema.parse(req.body);
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user?.id, type: WalletType.PACKAGE } });
  if (!wallet || Number(wallet.balance) < fee) {
    return res.status(400).json({ message: 'Insufficient package balance' });
  }

  const activation = await prisma.$transaction(async (tx) => {
    await tx.wallet.update({ where: { id: wallet.id }, data: { balance: { decrement: fee } } });
    const bot = await tx.botActivation.create({
      data: {
        userId: req.user!.id,
        fee,
        status: TransactionStatus.COMPLETED
      }
    });
    await tx.transaction.create({
      data: {
        userId: req.user!.id,
        type: TransactionType.BOT_ACTIVATION,
        amount: fee,
        status: TransactionStatus.COMPLETED
      }
    });
    return bot;
  });

  return res.json({ activation });
};

export const botReport = async (req: AuthedRequest, res: Response) => {
  const report = await prisma.botActivation.findMany({ where: { userId: req.user?.id } });
  return res.json({ report });
};
