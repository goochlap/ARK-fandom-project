import { ObjectId } from 'mongodb';
import { faker } from '@faker-js/faker';
import { Types } from 'mongoose';

const userTest = {
  _id: new ObjectId() as Types.ObjectId,
  name: faker.name.findName(),
  email: faker.internet.email(),
  role: 'user',
  password: 'Diplo4ever!',
};

export { userTest };
