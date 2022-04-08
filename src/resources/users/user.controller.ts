import { Response, Request, NextFunction } from 'express';
import ErrorResponse from '@/utils/error.response';
import User from '@/resources/users/user.model';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name, email, role, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    const accessToken = user.signWithToken();

    res.status(201).json({ success: true, accessToken });
  } catch (error) {
    next(error);
  }
};
