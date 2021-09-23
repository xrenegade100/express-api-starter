import { Request, Response } from 'express';

import express from 'express';

const router = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
