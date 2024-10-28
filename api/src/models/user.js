import { model, Schema } from 'mongoose';
import validator from 'validator';

const userSchema = new Schema(
  {
    email: {
      type: String,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'Некорректный Email',
      },
      required: [true, 'Поле "email" должно быть заполнено'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Поле "password" должно быть заполнено'],
      select: false,
    },
  },
  { versionKey: false },
);

export const User = model('user', userSchema);
