const { describe, it } = require('@jest/globals');
const request = require('supertest');
const express = require('express');
const routes = require('../../src/routes/index.js');


const PORT = 8004;
const app = express();
app.use(express.json());
routes(app);
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

let id;
describe('POST /payments', () => {
  it('creates a payment', async () => {
    const response = await request(app)
      .post('/payments')
      .send({
        valor: 8200.10,
        nome: 'Ada Lovelace',
        cartao: '4551688656769426',
        expiracao_cartao: '2025-01',
        cvv: '280',
        status: 'CRIADO',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    id = response.body.id;
  });
});

describe('GET /payments/:id', () => {
  it('returns a payment found by its id', async () => {
    await request(app)
      .get(`/payments/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /admin/payments', () => {
  it('updates a payment', async () => {
    await request(app)
      .patch(`/admin/payments/${id}`)
      .send({
        status: 'CANCELADO',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
