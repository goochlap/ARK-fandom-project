import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '@/utils/error.response';
import { Error } from 'mongoose';
import { MongoError } from 'mongodb';
import logger from './logger';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  type errorType = {
    name: string;
    message: string;
    stack?: string | undefined;
    status: number;
  };

  let error: errorType = {
    ...err,
    status: 0,
  };

  error.message = err.message;

  logger.error(err.stack);

  if (err instanceof Error.ValidationError) {
    const messages = Object.values(err.errors).map((err) => err.message);
    error = new ErrorResponse(messages, 404);
  }

  if ((err as MongoError).code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  if (err instanceof Error.CastError) {
    const message = `Resource with id: ${err.value} not found`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.status || 500).json({
    success: false,
    error: error.message || 'SERVER ERROR',
  });
};

export default errorHandler;
