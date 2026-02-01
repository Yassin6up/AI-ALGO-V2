import { Router } from 'express';
import { me } from '../controllers/userController';
import authMiddleware from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/me', authMiddleware, asyncHandler(me));

export default router;
