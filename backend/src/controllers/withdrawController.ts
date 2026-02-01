import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const withdrawSchema = z.object({
  amount: z.number().positive(),
  address: z.string(),
  network: z.string(),
  walletType: z.enum(['INCOME', 'PACKAGE'])
});

export const withdrawIncome = async (req: AuthRequest, res: Response) => {
  const payload = withdrawSchema.parse({ ...req.body, walletType: 'INCOME' });
  return processWithdraw(req, res, payload);
};

export const withdrawCapital = async (req: AuthRequest, res: Response) => {
  const payload = withdrawSchema.parse({ ...req.body, walletType: 'PACKAGE' });
  return processWithdraw(req, res, payload);
};

const processWithdraw = async (
  req: AuthRequest,
  res: Response,
  payload: z.infer<typeof withdrawSchema>
) => {
  const wallet = await prisma.wallet.findFirst({ where: { userId: req.user!.id, type: payload.walletType } });
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
    prisma.withdrawal.create({
      data: {
        userId: req.user!.id,
        amount: payload.amount,
        walletType: payload.walletType,
        address: payload.address,
        network: payload.network,
        status: 'PENDING'
      }
    })
  ]);

  return res.json({ message: 'Withdrawal requested' });
};

export const withdrawReport = async (req: AuthRequest, res: Response) => {
  const report = await prisma.withdrawal.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(report);
};
