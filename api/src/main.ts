import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { corsHandler } from './middlewares/cors';
import { errorLogger, requestLogger } from './middlewares/logger';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { PORT, MONGO_URL = '' } = process.env;

const app = express();
mongoose.connect(MONGO_URL);
app.use(express.json());
app.use(corsHandler);
app.use(requestLogger);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(
    `<html>
        <body>
            <h1>Ответ на сигнал из далёкого космоса</h1>
        </body>
        </html>`,
  );
});

app.use(errorLogger);
