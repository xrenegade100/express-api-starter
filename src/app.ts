import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();

import { notFound, errorHandler } from './middlewares';
import api from './api';

const app = express();

app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'test' })); // skip request logging during tests
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
