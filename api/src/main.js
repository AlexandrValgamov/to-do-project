import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index.js';
import { exceptionHandler } from './middlewares/exceptionHandler.js';
import { corsHandler } from './middlewares/cors.js';
import { requestLogger, errorLogger } from './middlewares/logger.js';
import {
  signupValidation,
  signinValidation,
} from './middlewares/validation.js';
import { createUser, login } from './controllers/users.js';
import { errors } from 'celebrate';

console.log('Loaded environment variables:', process.env.MONGO_URL);
const app = express();

const { PORT, MONGO_URL = '' } = process.env;
console.log(MONGO_URL);

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
app.use(errors());
app.use(exceptionHandler);
