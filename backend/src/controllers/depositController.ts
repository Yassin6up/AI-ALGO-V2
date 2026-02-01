import { Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

const createSchema = z.object({
  amount: z.number().positive(),
  method: z.string()
});

export const createDeposit = async (req: AuthRequest, res: Response) => {
  const payload = createSchema.parse(req.body);
  const deposit = await prisma.deposit.create({
    data: {
      userId: req.user!.id,
      amount: payload.amount,
      method: payload.method,
      status: 'PENDING'
    }
  });
  return res.status(201).json(deposit);
};

export const depositHistory = async (req: AuthRequest, res: Response) => {
  const history = await prisma.deposit.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: 'desc' }
  });
  return res.json(history);
};
