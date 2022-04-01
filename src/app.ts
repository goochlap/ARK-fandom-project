import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';
import logger from '@/middleware/logger';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

config();

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;

    this.initialiseMiddleware();
    this.initialiseDatabase();
  }

  private initialiseMiddleware(): void {
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  private async initialiseDatabase(): Promise<void> {
    const { MONGODB_URI, MONGODB_DB_NAME } = process.env;

    try {
      const connect = await mongoose.connect(`${MONGODB_URI}`, {
        dbName: MONGODB_DB_NAME,
      });

      logger.info(`MongoDB connected: ${connect.connection.name}`);
    } catch (err) {
      throw err;
    }
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`🚀 App listening on the port ${this.port}`);
    });
  }

  public check(): void {
    this.express.get('/api/check', (_, res: Response) =>
      res.status(200).send('Api is running...')
    );
  }
}

export default App;
