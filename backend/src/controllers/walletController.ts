import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const transferSchema = z.object({
  fromType: z.enum(['INCOME', 'PACKAGE']),
  toType: z.enum(['INCOME', 'PACKAGE']),
  amount: z.number().positive()
});

const transferUserSchema = z.object({
  recipientId: z.string(),
  amount: z.number().positive()
});

export const listWallets = async (req: AuthRequest, res: Response) => {
  const wallets = await prisma.wallet.findMany({ where: { userId: req.user!.id } });
  return res.json(wallets);
};

export const transferBetweenWallets = async (req: AuthRequest, res: Response) => {
  const payload = transferSchema.parse(req.body);
  if (payload.fromType === payload.toType) {
    return res.status(400).json({ message: 'Wallet types must differ' });
  }

  const [fromWallet, toWallet] = await Promise.all([
    prisma.wallet.findFirst({ where: { userId: req.user!.id, type: payload.fromType } }),
    prisma.wallet.findFirst({ where: { userId: req.user!.id, type: payload.toType } })
  ]);

  if (!fromWallet || !toWallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  if (Number(fromWallet.balance) < payload.amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  await prisma.$transaction([
    prisma.wallet.update({
      where: { id: fromWallet.id },
      data: { balance: { decrement: payload.amount } }
    }),
    prisma.wallet.update({
      where: { id: toWallet.id },
      data: { balance: { increment: payload.amount } }
    })
  ]);

  return res.json({ message: 'Transfer completed' });
};

export const transferToUser = async (req: AuthRequest, res: Response) => {
  const payload = transferUserSchema.parse(req.body);

  const senderWallet = await prisma.wallet.findFirst({ where: { userId: req.user!.id, type: 'INCOME' } });
  if (!senderWallet) {
    return res.status(404).json({ message: 'Sender wallet not found' });
  }
  if (Number(senderWallet.balance) < payload.amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  const receiverWallet = await prisma.wallet.findFirst({ where: { userId: payload.recipientId, type: 'INCOME' } });
  if (!receiverWallet) {
    return res.status(404).json({ message: 'Recipient wallet not found' });
  }

  await prisma.$transaction([
    prisma.wallet.update({
      where: { id: senderWallet.id },
      data: { balance: { decrement: payload.amount } }
    }),
    prisma.wallet.update({
      where: { id: receiverWallet.id },
      data: { balance: { increment: payload.amount } }
    })
  ]);

  return res.json({ message: 'Transfer sent' });
};
