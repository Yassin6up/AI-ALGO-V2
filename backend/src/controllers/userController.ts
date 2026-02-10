import { Response } from 'express';
import prisma from '../utils/prisma';
import { AuthedRequest } from '../middleware/auth';

export const me = async (req: AuthedRequest, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.user?.id } });
  return res.json({ user });
};
