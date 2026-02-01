import { Router } from 'express';
import { invest, investReport } from '../controllers/investController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', requireAuth, invest);
router.get('/report', requireAuth, investReport);

export default router;
