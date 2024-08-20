import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;
  try {
    const newUser = await User.create({
      name,
      password,
    });
    res.status(201).send({
      name: newUser.name,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const data = await User.findById(userId).orFail();
    res.send({ data });
  } catch (error) {
    next(error);
  }
};
