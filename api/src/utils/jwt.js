import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;
export const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET ? JWT_SECRET : 'SUPER_SECRET', {
    expiresIn: '7d',
  });
