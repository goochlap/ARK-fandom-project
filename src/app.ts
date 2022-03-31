import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';

config();

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public check(): void {
    this.express.get('/api/check', (req: Request, res: Response) =>
      res.status(200).send('Api is running...')
    );
  }
}

export default App;
