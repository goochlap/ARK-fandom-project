import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '@/utils/error.response';
import logger from './logger';

const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'SERVER ERROR',
  });
};

export default errorHandler;
