import express from 'express';
import mongoose from 'mongoose';
import {
  beforeAll, afterAll, describe, it,
} from '@jest/globals';
import request from 'supertest';
import db from '../config/dbTestConnect.js';
import routes from '../../src/routes/index.js';

const PORT = 8002;
const app = express();
app.use(express.json());
routes(app);
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
beforeAll(async () => {
  await db.once('open', () => {
    console.log('Db successfully connected!');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /categories', () => {
  it('returns all categories', async () => {
    await request(app)
      .get('/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /admin/categories', () => {
  it('creates a category', async () => {
    const response = await request(app)
      .post('/admin/categories')
      .send({
        nome: 'TESTE',
        status: 'ATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = response.body._id;
  });
});

describe('GET /categories/:id', () => {
  it('returns a category found by its id', async () => {
    await request(app)
      .get(`/categories/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /admin/categories', () => {
  it('updates a category', async () => {
    await request(app)
      .put(`/admin/categories/${id}`)
      .send({
        nome: 'TESTE',
        status: 'INATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /admin/categories/:id', () => {
  it('deletes a category', async () => {
    await request(app)
      .delete(`/admin/categories/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
