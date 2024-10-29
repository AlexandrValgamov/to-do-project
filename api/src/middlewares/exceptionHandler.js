export const exceptionHandler = (err, req, res, next) => {
  if (err.joi) {
    // Это ошибка celebrate
    console.error('Celebrate validation error:', err.joi.details);
  } else {
    // Другие ошибки
    console.error('General error:', err.message);
  }

  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
};
