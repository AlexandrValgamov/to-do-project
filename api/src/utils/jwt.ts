import jwt, { JwtPayload } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;
export const generateToken = (payload: JwtPayload ) => jwt.sign(payload, JWT_SECRET ? JWT_SECRET : 'SUPER_SECRET', {
  expiresIn: '7d',
});