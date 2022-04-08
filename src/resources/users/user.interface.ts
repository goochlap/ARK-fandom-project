import { Types } from 'mongoose';

export default interface User {
  _id: Types.ObjectId | string;
  name: string;
  email: string;
  role: string;
  password: string;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  createdAt: Date;

  matchPassword(password: string): Promise<Error | boolean>;
}
