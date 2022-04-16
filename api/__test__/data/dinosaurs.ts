import { Types } from 'mongoose';
import Dinosaur from '../../src/resources/dinosaurs/dinosaur.interface';

class DinosaurTest implements Dinosaur {
  _id: Types.ObjectId | string;
  name: string;
  description: string;
  diet: string;
  temperament: string;
  tameable: boolean;
  rideable: boolean;
  appearance: string;
  user: Types.ObjectId;

  constructor(name: string) {
    this.name = name;
    this._id = new Types.ObjectId();
    this.description = 'lorem ipsum';
    this.diet = 'Herbivore';
    this.temperament = 'naive';
    this.tameable = true;
    this.rideable = true;
    this.appearance = 'image/diplo.png';
    this.user = new Types.ObjectId();
  }
}

export { DinosaurTest };
