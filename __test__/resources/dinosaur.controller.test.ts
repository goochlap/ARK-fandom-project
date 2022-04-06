import request from 'supertest';
import api from '../utils/api';
import Dinosaur from '../../src/resources/dinosaurs/dinosaur.interface';
import { Types } from 'mongoose';

describe('Dinosaur controller flow', () => {
  it('Should return all dinosaurs', async () => {
    const response = await request(api).get('/dinosaurs');

    expect(response.status).toEqual(200);
  });
});

describe('Dinosaur controller flow', () => {
  it('Should create a Dinosaur', async () => {
    const dinosaur: Dinosaur = {
      name: 'Diplo',
      description: 'lorem ipsum',
      diet: 'Herbivore',
      temperament: 'naive',
      tameable: true,
      rideable: true,
      appearance: 'image/diplo.png',
      user: new Types.ObjectId(),
    };

    const response = await request(api)
      .post('/dinosaurs')
      .send(dinosaur)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.data.name).toEqual(dinosaur.name);
    expect(response.body.data.description).toEqual(dinosaur.description);
    expect(response.body.data.diet).toEqual(dinosaur.diet);
    expect(response.body.data.temperament).toEqual(dinosaur.temperament);
    expect(response.body.data.tameable).toEqual(dinosaur.tameable);
    expect(response.body.data.rideable).toEqual(dinosaur.rideable);
    expect(response.body.data.appearance).toEqual(dinosaur.appearance);
    expect(response.body.data.user).toEqual(dinosaur.user.toString());
  });
});
