import path from 'path';
import { fileURLToPath, URL } from 'url';

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

const app: Express = express();

app.set('env', NODE_ENV);

app.get('/', (req: Request, res: Response) => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
