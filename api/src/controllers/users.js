import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { generateToken } from '../utils/jwt.js';
import { UnauthorizedError } from '../errors/unauthorized.js';
import { User } from '../models/user.js';

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hash,
    });
    res.status(201).send({
      name: newUser.name,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password').orFail();
    const matched = await bcrypt.compare(String(password), user.password);
    console.log(email, password);
    if (!matched) {
      throw new UnauthorizedError('Неправильные почта или пароль');
    }
    const token = generateToken({ _id: user._id });

    res.send({ token, userId: user._id });
  } catch (error) {
    if (
      error instanceof mongoose.Error.DocumentNotFoundError ||
      error instanceof UnauthorizedError
    ) {
      return res.status(401).send({ message: 'Неправильные почта или пароль' });
    }
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const data = await User.findById(userId).orFail();
    res.send({ data });
  } catch (error) {
    next(error);
  }
};
