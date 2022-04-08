import { Router } from 'express';
import Route from '@/utils/route.interface';

import { register, login } from '@/resources/users/user.controller';

class UserRoute implements Route {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.route(`${this.path}/register`).post(register);
    this.router.route(`${this.path}/login`).post(login);
  }
}

export default UserRoute;
