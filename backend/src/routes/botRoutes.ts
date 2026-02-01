import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { activateBot, botReport } from '../controllers/botController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/activate', authMiddleware, asyncHandler(activateBot));
router.get('/report', authMiddleware, asyncHandler(botReport));

export default router;
