import { Router } from 'express';
import { login, logout, me, refresh, register } from '../controllers/authController';
import { requireAuth } from '../middlewares/authMiddleware';
import { authRateLimiter } from '../middlewares/rateLimit';

const router = Router();

router.post('/register', authRateLimiter, register);
router.post('/login', authRateLimiter, login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', requireAuth, me);

export default router;
