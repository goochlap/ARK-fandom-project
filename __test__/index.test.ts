import request from 'supertest';
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

describe('API Test', () => {
  it('Should return 200 status code', async () => {
    const response = await request(api).get('/check');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Api is running...');
  });
});
