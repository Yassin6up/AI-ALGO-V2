import { Router } from 'express';
import { withdrawCapital, withdrawIncome, withdrawReport } from '../controllers/withdrawController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.post('/income', requireAuth, withdrawIncome);
router.post('/capital', requireAuth, withdrawCapital);
router.get('/report', requireAuth, withdrawReport);

export default router;
