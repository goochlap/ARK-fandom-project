import { Schema, model } from 'mongoose';
import User from '@/resources/users/user.interface';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, 'Name required'],
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email',
    ],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre<User>('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

UserSchema.methods.matchPassword = async function (
  inputPassword: string
): Promise<Error | boolean> {
  return await bcrypt.compare(inputPassword, this.password);
};

export default model<User>('User', UserSchema);
