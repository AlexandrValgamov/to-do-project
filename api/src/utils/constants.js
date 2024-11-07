export const BAD_REQUEST = 400;
export const NOT_FOUND = 404;
export const SERVER_ERROR = 500;
export const UNAUTHORIZED = 401;
export const MONGO_DUPLICATE_ERROR_CODE = 11000;
export const regex =
  /https?:\/\/(www\.)?[\w-]+\.[a-zA-Z\d._~:?#[\]/@!$&'()*+,;=-]{2,}#?/;

export const allowedCors = ['http://localhost:3000'];
export const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
