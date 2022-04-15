import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';
import bcrypt from 'bcryptjs';

import User from '@/resources/users/user.interface';
import Dinosaur from '@/resources/dinosaurs/dinosaur.interface';

const hashPassword = bcrypt.hashSync('Diplo4ever!', 10);

const users: User[] = [
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be001') as Types.ObjectId,
    name: 'Admin',
    email: 'admin@gmail.com',
    role: 'admin',
    password: hashPassword,
  },
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be002') as Types.ObjectId,
    name: 'User1',
    email: 'user1@gmail.com',
    role: 'user',
    password: hashPassword,
  },
  {
    _id: new ObjectId('5d7a514b5d2c12c7449be003') as Types.ObjectId,
    name: 'User2',
    email: 'user2@gmail.com',
    role: 'user',
    password: hashPassword,
  },
];

const dinosaurs: Dinosaur[] = [
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
    user: users[0],
  },
  {
    name: 'Dilophosaurus',
    description:
      'Dilophosaurus sputatrix is a strange creature. It stands at just over half the size of known Dilophosaurs and runs from aggressors as often as it fights them. Dilophosaurus sputatrix has a few traits not common in the Dilophosaurus genus. It has a very shrill call, and a decorative ridge of skin on its neck. I believe these are used to attract mates, as well as intimidate prey and would-be predators. Instead of attacking its prey outright, Dilophosaurus sputatrix spits venom to weaken and paralyze it before moving in for the kill.',
    diet: 'Carnivore',
    temperament: 'Territorial',
    tameable: true,
    rideable: false,
    appearance: 'image/dilo.png',
    user: users[0],
  },
  {
    name: 'Deinonychus',
    description:
      "By the time you hear the scurrying claws of the Deinonychus, it's often too late. Superior hunters, they leap from a hiding place and pounce on their prey. The Deinonychus is an agile climber as well, jumping from wall ledge to wall ledge as it seeks high vantage points to lie in wait. A hungry Deinonychus tends to be fearless and will hunt prey much larger than itself, latching onto a dinosaur's back with its sickle-shaped claws, then starting to feed before its victim is even dead. While it likes its meat fresh, a Deinonychus isn't above scavenging a carcass if no other food is available.",
    diet: 'Carnivore',
    temperament: 'Aggressive',
    tameable: false,
    rideable: true,
    appearance: 'image/deinonychus.png',
    user: users[1],
  },
  {
    name: 'Pteranodon',
    description:
      'Pteranodon wyvernus is a large pterosaur, capable of flying more quickly than any creature I have witnessed on this Island thus far',
    diet: 'Carnivore',
    temperament: 'Skittish',
    tameable: true,
    rideable: true,
    appearance: 'image/pteranodon.png',
    user: users[1],
  },
  {
    name: 'Mosasaurus',
    description:
      "Mosasaurus is a deep-sea marine lizard which spends all of its time far beneath the water's surface. It is without a doubt one of the most fearsome creatures of the Island, and can certainly be considered among the ocean's apex predators.",
    diet: 'Carnivore',
    temperament: 'Aggressive',
    tameable: true,
    rideable: true,
    appearance: 'image/mosasaurus.png',
    user: users[1],
  },
];

export { users, dinosaurs };
