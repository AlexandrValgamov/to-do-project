import { Router } from 'express';
import userRouter from './users.js';
import todoRouter from './todos.js';

const router = Router();

router.use('/users', userRouter);
router.use('/todos', todoRouter);
router.all('/*', (req, res, next) => {
  next();
});

export default router;
