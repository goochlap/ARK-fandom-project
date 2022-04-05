import request from 'supertest';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import logger from '../src/middleware/logger';
import api from './utils/api';
import { initializeDatabase, dropDatabase } from './utils/db';

config();

beforeAll(() => {
  initializeDatabase();
});

afterAll(() => {
  dropDatabase();
});

describe('Sample Test', () => {
  it('Should return 200 status code', async () => {
    const res = await request(api).get('/check');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Api is running...');
  });
});
