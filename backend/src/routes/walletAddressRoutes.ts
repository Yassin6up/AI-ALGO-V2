import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import { addAddress, listAddresses, sendOtp, verifyOtp } from '../controllers/walletAddressController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/send-otp', authMiddleware, asyncHandler(sendOtp));
router.post('/verify-otp', authMiddleware, asyncHandler(verifyOtp));
router.post('/add', authMiddleware, asyncHandler(addAddress));
router.get('/list', authMiddleware, asyncHandler(listAddresses));

export default router;
