import logger from '../config/logger.js';

const errorHandler = (err, req, res, next) => {
  
  logger.error(`Error: ${err.message} - ${req.method} ${req.originalUrl}`);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    msg: err.message || "Something went wrong"
  });
};

export default errorHandler;
