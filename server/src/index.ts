import path from 'path';
// import { fileURLToPath, URL } from 'url';
import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';

import { test } from './test.js';

test();

dotenv.config();

const CLIENT_PATH: string = path.resolve(process.cwd(), 'client');

const { PORT, NODE_ENV } = process.env;

const app: Express = express();

app.set('env', NODE_ENV);

app.use(express.static(`${CLIENT_PATH}/dist`, { index: false }));
app.use(express.static(`${CLIENT_PATH}/public`, { index: false }));

app.get('*', (req: Request, res: Response) => {
  // const __dirname = fileURLToPath(new URL('.', import.meta.url));
  res.sendFile(`${CLIENT_PATH}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
