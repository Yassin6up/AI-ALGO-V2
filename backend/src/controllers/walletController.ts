import { Response } from 'express';
import { z } from 'zod';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';
import { TransactionStatus, TransactionType, WalletType } from '@prisma/client';

export const getWallets = async (req: AuthedRequest, res: Response) => {
  const wallets = await prisma.wallet.findMany({ where: { userId: req.user?.id } });
  return res.json({ wallets });
};

const transferSchema = z.object({
  from: z.nativeEnum(WalletType),
  to: z.nativeEnum(WalletType),
  amount: z.number().positive()
});

export const transferBetweenWallets = async (req: AuthedRequest, res: Response) => {
  const { from, to, amount } = transferSchema.parse(req.body);
  if (from === to) {
    return res.status(400).json({ message: 'Wallet types must differ' });
  }

  const [fromWallet, toWallet] = await prisma.$transaction([
    prisma.wallet.findFirst({ where: { userId: req.user?.id, type: from } }),
    prisma.wallet.findFirst({ where: { userId: req.user?.id, type: to } })
  ]);

  if (!fromWallet || !toWallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }
  if (Number(fromWallet.balance) < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  await prisma.$transaction([
    prisma.wallet.update({ where: { id: fromWallet.id }, data: { balance: { decrement: amount } } }),
    prisma.wallet.update({ where: { id: toWallet.id }, data: { balance: { increment: amount } } }),
    prisma.transaction.create({
      data: {
        userId: req.user!.id,
        type: TransactionType.TRANSFER,
        amount,
        status: TransactionStatus.COMPLETED,
        metadata: { from, to }
      }
    })
  ]);

  return res.json({ message: 'Transfer completed' });
};

const transferUserSchema = z.object({
  recipientEmail: z.string().email(),
  amount: z.number().positive()
});

export const transferToUser = async (req: AuthedRequest, res: Response) => {
  const { recipientEmail, amount } = transferUserSchema.parse(req.body);
  const senderWallet = await prisma.wallet.findFirst({ where: { userId: req.user?.id, type: WalletType.INCOME } });
  if (!senderWallet) {
    return res.status(404).json({ message: 'Sender wallet missing' });
  }
  if (Number(senderWallet.balance) < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  const recipient = await prisma.user.findUnique({ where: { email: recipientEmail } });
  if (!recipient) {
    return res.status(404).json({ message: 'Recipient not found' });
  }

  const recipientWallet = await prisma.wallet.findFirst({ where: { userId: recipient.id, type: WalletType.INCOME } });
  if (!recipientWallet) {
    return res.status(404).json({ message: 'Recipient wallet missing' });
  }

  await prisma.$transaction([
    prisma.wallet.update({ where: { id: senderWallet.id }, data: { balance: { decrement: amount } } }),
    prisma.wallet.update({ where: { id: recipientWallet.id }, data: { balance: { increment: amount } } }),
    prisma.transaction.create({
      data: {
        userId: req.user!.id,
        type: TransactionType.TRANSFER,
        amount,
        status: TransactionStatus.COMPLETED,
        metadata: { to: recipientEmail }
      }
    })
  ]);

  return res.json({ message: 'Transfer sent' });
};
