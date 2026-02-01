import { Router } from 'express';
import { createDeposit, depositHistory } from '../controllers/depositController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.post('/create', requireAuth, createDeposit);
router.get('/history', requireAuth, depositHistory);

export default router;
