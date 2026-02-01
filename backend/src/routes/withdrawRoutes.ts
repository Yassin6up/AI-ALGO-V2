import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { withdrawCapital, withdrawIncome, withdrawReport } from '../controllers/withdrawController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/income', authMiddleware, asyncHandler(withdrawIncome));
router.post('/capital', authMiddleware, asyncHandler(withdrawCapital));
router.get('/report', authMiddleware, asyncHandler(withdrawReport));

export default router;
