import mongoose from 'mongoose';
import logger from '../../src/middleware/logger';

const initializeDatabase = async (): Promise<void> => {
  const { MONGODB_URI_TEST, MONGODB_DB_NAME_TEST } = process.env;

  try {
    const connect = await mongoose.connect(`${MONGODB_URI_TEST}`, {
      dbName: MONGODB_DB_NAME_TEST,
    });

    logger.info(`MongoDB connected: ${connect.connection.name}`);
  } catch (err) {
    throw err;
  }
};

const dropDatabase = async (): Promise<void> => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();

    logger.info(`Db droped & closed!`);
  } catch (err) {
    throw err;
  }
};

export { initializeDatabase, dropDatabase };
