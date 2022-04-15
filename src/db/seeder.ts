import 'module-alias/register';
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import logger from '@/middleware/logger';

import User from '@/resources/users/user.interface';
import Dinosaur from '@/resources/dinosaurs/dinosaur.interface';

import mongoDbInfos from '@/db/url';
import { users, dinosaurs } from './data';

const { url } = mongoDbInfos();

const importData = async (): Promise<void> => {
  const client = await MongoClient.connect(url);

  try {
    const db = client.db('ark-db-development');
    logger.info('DB connected');

    await db.collection('users').drop();
    await db.collection('dinosaurs').drop();
    logger.info('DB cleaned');

    await db.collection<User>('users').insertMany(users);
    await db.collection<Dinosaur>('dinosaurs').insertMany(dinosaurs);
    logger.info('Data imported in DB');
  } catch (error) {
    logger.error(error);
  } finally {
    client.close();
    logger.info('DB seeding done');
  }
};

importData();
