import 'module-alias/register';
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import logger from '@/middleware/logger';
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

    await db.collection('users').insertMany(users);
    await db.collection('dinosaurs').insertMany(dinosaurs);
    logger.info('Data imported in DB');
  } catch (error) {
    logger.error(error);
  } finally {
    client.close();
    logger.info('DB seeding done');
  }
};

importData();
