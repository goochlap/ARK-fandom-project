import { Router } from 'express';
import Route from '@/utils/route.interface';
import { authMiddleware } from '@/middleware/auth';

import {
  getDinosaurs,
  getDinosaur,
  createDinosaur,
  updateDinosaur,
  deleteDinosaur,
} from './dinosaur.controller';

class DinosaurRoute implements Route {
  public path = '/dinosaurs';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router
      .route(`${this.path}`)
      .get(getDinosaurs)
      .post(authMiddleware, createDinosaur);

    this.router
      .route(`${this.path}/:id`)
      .get(getDinosaur)
      .put(authMiddleware, updateDinosaur)
      .delete(authMiddleware, deleteDinosaur);
  }
}

export default DinosaurRoute;
