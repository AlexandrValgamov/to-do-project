import { Router } from 'express';
import { createUser, getUserById } from '../controllers/users';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:userId', getUserById);

export default userRouter;
