import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { affiliateIncome, incomeSummary, tradingIncome } from '../controllers/incomeController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/affiliate', authMiddleware, asyncHandler(affiliateIncome));
router.get('/trading', authMiddleware, asyncHandler(tradingIncome));
router.get('/summary', authMiddleware, asyncHandler(incomeSummary));

export default router;
