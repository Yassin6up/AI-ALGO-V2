import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { getWallets, transferBetweenWallets, transferToUser } from '../controllers/walletController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/', authMiddleware, asyncHandler(getWallets));
router.post('/transfer', authMiddleware, asyncHandler(transferBetweenWallets));
router.post('/transfer-user', authMiddleware, asyncHandler(transferToUser));

export default router;
