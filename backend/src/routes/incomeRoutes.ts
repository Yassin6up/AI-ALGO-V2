import { Router } from 'express';
import { affiliateIncome, incomeSummary, tradingIncome } from '../controllers/incomeController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/affiliate', requireAuth, affiliateIncome);
router.get('/trading', requireAuth, tradingIncome);
router.get('/summary', requireAuth, incomeSummary);

export default router;
