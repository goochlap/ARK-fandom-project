import { Response, Request, NextFunction } from 'express';
import ErrorResponse from '@/utils/error.response';
import UserModel from '@/resources/users/user.model';
import RequestWithUser from '@/interfaces/requestWithUser.interface';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name, email, role, password } = req.body;

  try {
    const user = await UserModel.create({
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    const accessToken = user.signWithToken();

    res.status(200).json({ success: true, accessToken });
  } catch (error) {
    next(error);
  }
};

export const currentUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id = req.user?._id;

  try {
    const user = await UserModel.findById(id);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};
