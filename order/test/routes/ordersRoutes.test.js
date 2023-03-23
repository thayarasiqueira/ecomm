import express from 'express';
import mongoose from 'mongoose';
import {
  beforeAll, afterAll, describe, it,
} from '@jest/globals';
import request from 'supertest';
import db from '../config/dbTestConnect.js';
import routes from '../../src/routes/index.js';

const PORT = 8001;
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

let id;
describe('POST /admin/orders', () => {
  it('creates an order', async () => {
    const response = await request(app)
      .post('/admin/orders')
      .send({
        clienteId: '63e251a0cf56b0d82cb740bc',
        enderecoDeEntrega: {
          logradouro: 'Avenida Ceará',
          numero: '2478',
          complemento: 'S/N',
          bairro: 'Cerâmica',
          cep: '69905062',
          cidade: 'Rio Branco',
          uf: 'AC',
        },
        itens: [
          {
            _id: {
              $oid: '63c55f04d1c852ebb46cd350',
            },
            nomeProduto: 'Building Microservices',
            quantidade: 1,
            preco: 300.28,
            valorDesconto: 50.00,
          },
        ],
        status: 'REALIZADO',
      })
      .set('Accept', 'application/json')
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = response.body._id;
  });
});

describe('GET /orders/:id', () => {
  it('returns an order found by its id', async () => {
    await request(app)
      .get(`/orders/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /admin/orders', () => {
  it('updates an order', async () => {
    await request(app)
      .patch(`/admin/orders/${id}`)
      .send({
        idPayment: '4',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
