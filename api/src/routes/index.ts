import { Router } from 'express';
import userRouter from './users';
import todoRouter from './todos';

const router = Router();

router.use('/users', userRouter);
router.use('/todos', todoRouter);
router.all('/*', (req, res, next) => {
  next();
});

export default router;