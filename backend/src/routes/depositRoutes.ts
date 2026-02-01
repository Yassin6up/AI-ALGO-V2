import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { createDeposit, depositHistory } from '../controllers/depositController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/create', authMiddleware, asyncHandler(createDeposit));
router.get('/history', authMiddleware, asyncHandler(depositHistory));

export default router;
