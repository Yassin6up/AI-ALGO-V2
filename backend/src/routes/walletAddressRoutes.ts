import { Router } from 'express';
import { addAddress, listAddresses, sendOtp, verifyOtp } from '../controllers/walletAddressController';
import { requireAuth } from '../middlewares/authMiddleware';

const router = Router();

router.post('/send-otp', requireAuth, sendOtp);
router.post('/verify-otp', requireAuth, verifyOtp);
router.post('/add', requireAuth, addAddress);
router.get('/list', requireAuth, listAddresses);

export default router;
