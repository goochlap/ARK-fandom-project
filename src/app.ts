import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';
import logger from '@/middleware/logger';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Route from '@/utils/route.interface';
import errorHandler from '@/middleware/error';
import mongoDbInfos from './db/url';

config();

class App {
  public express: Application;
  public port: number;

  constructor(port: number, routes: Route[]) {
    this.express = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeDatabase();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  private initializeRoutes(routes: Route[]): void {
    routes.forEach((route: Route) => {
      this.express.use('/api', route.router);
    });
  }

  private initializeMiddleware(): void {
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(cookieParser());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  private initializeErrorHandling(): void {
    this.express.use(errorHandler);
  }

  private async initializeDatabase(): Promise<void> {
    const { url, dbName } = mongoDbInfos();

    try {
      const connect = await mongoose.connect(`${url}`, {
        dbName,
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
