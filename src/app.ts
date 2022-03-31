import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';
import logger from './middleware/logger';
import morgan from 'morgan';

config();

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;

    this.initialiseMiddleware();
  }

  private initialiseMiddleware(): void {
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
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
