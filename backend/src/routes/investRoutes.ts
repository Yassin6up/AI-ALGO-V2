import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { invest, investReport } from '../controllers/investController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/', authMiddleware, asyncHandler(invest));
router.get('/report', authMiddleware, asyncHandler(investReport));

export default router;
