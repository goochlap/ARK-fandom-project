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

export { users };
