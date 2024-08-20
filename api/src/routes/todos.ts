import { Router } from 'express';
const {
  getTodos,
  createTodo
} = require('../controllers/todos');

const todoRouter = Router();

todoRouter.get('/:userId', getTodos);
todoRouter.post('/', createTodo);

export default todoRouter;