import { Schema, model } from 'mongoose';
import Dinosaur from './dinosaur.interface';

const DinosaurSchema = new Schema<Dinosaur>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    diet: {
      type: String,
      required: true,
    },
    temperament: {
      type: String,
      required: true,
    },
    tameable: {
      type: Boolean,
      required: true,
    },
    rideable: {
      type: Boolean,
      required: true,
    },
    appearance: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default model<Dinosaur>('Dinosaur', DinosaurSchema);
