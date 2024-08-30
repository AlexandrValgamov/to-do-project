import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { generateToken } from '../utils';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      password: hash,
    });
    res.status(201).send({
      name: newUser.name,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password').orFail();
    const matched = await bcrypt.compare(String(password), user.password);
    if (!matched) {
      throw new Error('Неправильные почта или пароль');
    }
    const token = generateToken({ _id: user._id });
    console.log('token', token);

    res.send({ token });
  } catch (error) {
    if (error instanceof mongoose.Error.DocumentNotFoundError) {
      return next(new Error('Неправильные почта или пароль'));
    }
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;

  try {
    const data = await User.findById(userId).orFail();
    res.send({ data });
  } catch (error) {
    next(error);
  }
};
