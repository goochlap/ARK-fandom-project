import { Router } from 'express';
import Route from '@/utils/route.interface';

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
    this.router.route(`${this.path}`).get(getDinosaurs).post(createDinosaur);

    this.router
      .route(`${this.path}/:id`)
      .get(getDinosaur)
      .put(updateDinosaur)
      .delete(deleteDinosaur);
  }
}

export default DinosaurRoute;
