import { Router } from 'express';
import { activateBot, botReport } from '../controllers/botController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.post('/activate', requireAuth, activateBot);
router.get('/report', requireAuth, botReport);

export default router;
