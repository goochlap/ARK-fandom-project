import { Response, Request, NextFunction } from 'express';
import ErrorResponse from '@/utils/error.response';
import UserModel from '@/resources/users/user.model';
import RequestWithUser from '@/interfaces/requestWithUser.interface';
import User from './user.interface';

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

    sendTokenResponse(user, 201, res);
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

    if (!user || !(await user.matchPassword!(password))) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    res.clearCookie('token').send({ success: true, message: 'cookie cleared' });
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

const sendTokenResponse = (
  user: User,
  status: number,
  res: Response
): Response | void => {
  const accessToken = user.signWithToken!();

  const options = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  };

  res
    .status(status)
    .cookie('token', accessToken, options)
    .json({ success: true, accessToken });
};
