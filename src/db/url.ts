import { config } from 'dotenv';
import logger from '@/middleware/logger';

config();

const mongoDbInfos = (): { url?: string; dbName?: string } => {
  const {
    NODE_ENV,
    MONGODB_URI_DEVELOPMENT,
    MONGODB_URI_TEST,
    MONGODB_DB_NAME,
    MONGODB_DB_NAME_TEST,
  } = process.env;

  switch (NODE_ENV) {
    case 'development':
      return { url: MONGODB_URI_DEVELOPMENT, dbName: MONGODB_DB_NAME };

    case 'test':
      return { url: MONGODB_URI_TEST, dbName: MONGODB_DB_NAME_TEST };

    default:
      logger.warn(
        `The env development has been set by default. The value for DE_ENV: ${NODE_ENV}`
      );
      return { url: MONGODB_URI_DEVELOPMENT, dbName: MONGODB_DB_NAME };
  }
};

export default mongoDbInfos;
