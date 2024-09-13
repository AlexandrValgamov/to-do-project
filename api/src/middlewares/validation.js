import { celebrate, Joi } from 'celebrate';

export const signupValidation = celebrate({
  body: Joi.object().keys({
    username: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

export const signinValidation = celebrate({
  body: Joi.object().keys({
    username: Joi.string().required().min(2).max(30),
    password: Joi.string().required(),
  }),
});
