import { Types } from 'mongoose';

export default interface Dinosaur {
  name: string;
  description: string;
  diet: string;
  temperament: string;
  tameable: boolean;
  rideable: boolean;
  appearance: string;
  user: Types.ObjectId;
}
