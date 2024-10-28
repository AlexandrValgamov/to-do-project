import { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todos.js';

const todoRouter = Router();

todoRouter.get('/:userId', getTodos);
todoRouter.post('/', createTodo);

export default todoRouter;
