import { Router } from 'express';
import Route from '@/utils/route.interface';

import { register } from '@/resources/users/user.controller';

class UserRoute implements Route {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.route(`${this.path}`).post(register);
  }
}

export default UserRoute;
