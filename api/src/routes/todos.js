import { Router } from 'express';
import { createTodo, deleteTodo, getTodos } from '../controllers/todos.js';

const todoRouter = Router();

todoRouter.get('/:userId', getTodos);
todoRouter.post('/', createTodo);
todoRouter.delete('/:todoId', deleteTodo);

export default todoRouter;
