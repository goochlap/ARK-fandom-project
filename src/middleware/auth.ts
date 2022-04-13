import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorResponse from '@/utils/error.response';
import User from '@/resources/users/user.model';
import { DataStoredInToken } from 'interfaces/token.interface';
import RequestWithUser from 'interfaces/requestWithUser.interface';

const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return next(new ErrorResponse('Unauthorized to access this route', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = <DataStoredInToken>(
      jwt.verify(token, process.env.JWT_SECRET)
    );

    const user = await User.findById(payload.id);

    if (!user) {
      return next(
        new ErrorResponse(`User with id ${payload.id} not found`, 404)
      );
    }

    req.user = user;

    next();
  } catch (error) {
    new ErrorResponse('Unauthorized to access this route', 401);
  }
};

export { authMiddleware };
