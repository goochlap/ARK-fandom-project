import request from 'supertest';
import api from '../utils/api';
import { DinosaurTest } from '../data/dinosaurs';
import { userTest } from '../data/users';

describe('Dinosaur controller flow', () => {
  let accessToken: string;
  let dinosaurTest = new DinosaurTest('Diplodocus');

  it('Should register a new user', async () => {
    const response = await request(api)
      .post('/users/register')
      .send(userTest)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.success).toBe(true);

    accessToken = response.body.accessToken;
  });

  it('Should create a Dinosaur', async () => {
    const response = await request(api)
      .post('/dinosaurs')
      .set('Authorization', `Bearer ${accessToken}`)
      .send(dinosaurTest)
      .expect('Content-Type', /json/)
      .expect(201);

    const dinosaurCreated = response.body.data;

    expect(dinosaurCreated.name).toEqual(dinosaurTest.name);
    expect(dinosaurCreated.description).toEqual(dinosaurTest.description);
    expect(dinosaurCreated.diet).toEqual(dinosaurTest.diet);
    expect(dinosaurCreated.temperament).toEqual(dinosaurTest.temperament);
    expect(dinosaurCreated.tameable).toEqual(dinosaurTest.tameable);
    expect(dinosaurCreated.rideable).toEqual(dinosaurTest.rideable);
    expect(dinosaurCreated.appearance).toEqual(dinosaurTest.appearance);
    expect(dinosaurCreated.user).toEqual(dinosaurTest.user.toString());

    dinosaurTest = dinosaurCreated;
  });

  it('Should get all dinosaurs', async () => {
    const response = await request(api).get('/dinosaurs');

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
  });

  it('Should get a dinosaur by ID', async () => {
    const response = await request(api).get(`/dinosaurs/${dinosaurTest._id}`);

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.data._id).toEqual(dinosaurTest._id);
  });

  it('Should update a dinosaur by ID', async () => {
    dinosaurTest.name = 'Diplodocus updated';

    const response = await request(api)
      .put(`/dinosaurs/${dinosaurTest._id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(dinosaurTest);

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.data._id).toEqual(dinosaurTest._id);
    expect(response.body.data.name).toEqual('Diplodocus updated');

    dinosaurTest = response.body.data;
  });

  it('Should delete a dinosaur by ID', async () => {
    const response = await request(api)
      .delete(`/dinosaurs/${dinosaurTest._id}`)
      .set('Authorization', `Bearer ${accessToken}`);

    expect(response.status).toEqual(204);
  });
});
