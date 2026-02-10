import { Router } from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import walletRoutes from './walletRoutes';
import botRoutes from './botRoutes';
import investRoutes from './investRoutes';
import depositRoutes from './depositRoutes';
import withdrawRoutes from './withdrawRoutes';
import incomeRoutes from './incomeRoutes';
import walletAddressRoutes from './walletAddressRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/', userRoutes);
router.use('/wallets', walletRoutes);
router.use('/bot', botRoutes);
router.use('/invest', investRoutes);
router.use('/deposit', depositRoutes);
router.use('/withdraw', withdrawRoutes);
router.use('/income', incomeRoutes);
router.use('/wallet-address', walletAddressRoutes);

export default router;
