import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './config/env';
import routes from './routes';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'neoalgo-api' });
});

app.use('/api', routes);
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`API running on port ${env.port}`);
});
