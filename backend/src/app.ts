import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import walletRoutes from './routes/walletRoutes';
import botRoutes from './routes/botRoutes';
import investRoutes from './routes/investRoutes';
import depositRoutes from './routes/depositRoutes';
import withdrawRoutes from './routes/withdrawRoutes';
import incomeRoutes from './routes/incomeRoutes';
import walletAddressRoutes from './routes/walletAddressRoutes';
import { env } from './config/env';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/bot', botRoutes);
app.use('/api/invest', investRoutes);
app.use('/api/deposit', depositRoutes);
app.use('/api/withdraw', withdrawRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/wallet-address', walletAddressRoutes);

app.use(errorHandler);

export default app;
