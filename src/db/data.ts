import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

const hashPassword = bcrypt.hashSync('Diplo4ever!', 10);

const users = [
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be001'),
    name: 'Admin',
    email: 'admin@gmail.com',
    role: 'admin',
    password: hashPassword,
  },
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be002'),
    name: 'User1',
    email: 'user1@gmail.com',
    role: 'user',
    password: hashPassword,
  },
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be003'),
    name: 'User2',
    email: 'user2@gmail.com',
    role: 'user',
    password: hashPassword,
  },
];

const dinosaurs = [
  {
    name: 'T-rex',
    description:
      "Tyrannosaurus rex, whose name means king of the tyrant lizards, was built to rule. This dinosaur's muscular body stretched as long as 40 feet—about the size of a school bus—from its snout to the tip of its powerful tail. Weighing up to eight tons, T. rex stomped headfirst across its territory on two strong legs.",
    diet: 'Carnivore',
    temperament: 'aggresive',
    tameable: true,
    rideable: true,
    appearance: 'image/t-rex.png',
    user: users[0],
  },
  {
    name: 'Diplodocus',
    description:
      'Diplodocus is among the most easily identifiable dinosaurs, with its typical sauropod shape, long neck and tail, and four sturdy legs.',
    diet: 'Herbivore',
    temperament: 'naive',
    tameable: true,
    rideable: true,
    appearance: 'image/diplodocus.png',
    user: users[1],
  },
];

export { users, dinosaurs };
