import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

const app: Express = express();

app.set('env', NODE_ENV);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
