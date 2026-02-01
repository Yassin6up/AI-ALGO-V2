import { Router } from 'express';
import { listWallets, transferBetweenWallets, transferToUser } from '../controllers/walletController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', requireAuth, listWallets);
router.post('/transfer', requireAuth, transferBetweenWallets);
router.post('/transfer-user', requireAuth, transferToUser);

export default router;
