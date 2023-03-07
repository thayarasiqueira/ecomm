import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

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
