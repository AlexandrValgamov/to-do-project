import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { generateToken } from '../utils/jwt.js';
import { User } from '../models/User.js';
import { ConflictError } from '../errors/сonflictError.js';
import { BadRequestError } from '../errors/BadRequestError.js';
import { MONGO_DUPLICATE_ERROR_CODE } from '../utils/constants.js';
import { ForbiddenError } from '../errors/forbiddenError.js';

const ValidationErrorHandler = (error, next) => {
  const validationErrors = Object.values(error.errors).map(
    (err) => err.message,
  );
  return next(
    new BadRequestError(`Ошибка валидации. ${validationErrors.join(' ')}`),
  );
};

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hash,
    });
    const user = await User.findOne({ email }).select('+password').orFail();
    const token = generateToken({ _id: user._id });

    res.status(201).send({
      email,
      userId: user._id,
      token,
    });
  } catch (error) {
    if (error.code === MONGO_DUPLICATE_ERROR_CODE) {
      return next(new ConflictError('Такой пользователь уже существует'));
    }
    if (error instanceof mongoose.Error.ValidationError) {
      return ValidationErrorHandler(error, next);
    }
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password').orFail();

    const matched = await bcrypt.compare(String(password), user.password);
    if (!matched) {
      throw new ForbiddenError('Неправильные почта или пароль');
    }

    const token = generateToken({ _id: user._id });

    res.send({ email, token, userId: user._id });
  } catch (error) {
    if (error instanceof mongoose.Error.DocumentNotFoundError) {
      return next(new ForbiddenError('Неправильные почта или пароль'));
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
