import { Request, Response, NextFunction } from 'express';
import { allowedCors, DEFAULT_ALLOWED_METHODS } from '../utils';

export const corsHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { origin = '' } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
};
