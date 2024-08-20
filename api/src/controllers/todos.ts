import { Request, Response, NextFunction } from 'express';
import Todo from '../models/todo';

interface CustomRequest extends Request {
  user: { _id: string };
}

export const getTodos = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    const data = await Todo.find({ userId }).orFail();
    res.send({ data });
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const { title, description, userId } = req.body;
  try {
    const data = await Todo.create({ title, description, userId });
    res.send({ message: 'TODO создана', data });
  } catch (error) {
    next(error);
  }
};
