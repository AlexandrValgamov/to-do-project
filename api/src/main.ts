import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { corsHandler } from './middlewares/cors';
import { errorLogger, requestLogger } from './middlewares/logger';
import router from './routes';
import { exceptionHandler } from './middlewares/exceptionHandler';
import { signinValidation, signupValidation } from './middlewares/validation';
import { createUser, login } from './controllers/users';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { PORT, MONGO_URL = '' } = process.env;

const app = express();
mongoose.connect(MONGO_URL);
app.use(express.json());
app.use(corsHandler);
app.use(requestLogger);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});

app.post('/signup', signupValidation, createUser);
app.post('/signin', signinValidation, login);
app.use(router);

app.use(errorLogger);
app.use(exceptionHandler);
