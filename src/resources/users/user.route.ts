import { Router } from 'express';
import Route from '@/utils/route.interface';
import { authMiddleware } from '@/middleware/auth';

import {
  register,
  login,
  currentUser,
} from '@/resources/users/user.controller';

class UserRoute implements Route {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.route(`${this.path}/register`).post(register);
    this.router.route(`${this.path}/login`).post(login);
    this.router.route(`${this.path}/me`).post(authMiddleware, currentUser);
  }
}

export default UserRoute;
