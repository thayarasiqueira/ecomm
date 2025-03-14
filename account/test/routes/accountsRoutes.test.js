import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../../src/app.js';

describe('GET /admin/accounts', () => {
  it('returns all accounts', async () => {
    await request(app)
      .get('/admin/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /admin/accounts', () => {
  it('creates an account', async () => {
    const response = await request(app)
      .post('/admin/accounts')
      .send({
        nome: 'Teste',
        email: 'testee@email.com',
        senha: 'Teste123!',
        cpf: '74170544048',
        telefone: '5537485954837',
        endereco: {
          logradouro: 'Rua Afonso Cavalcante de Oliveira',
          numero: '582',
          complemento: 'Apartamento 10',
          bairro: 'Jangurussu',
          cep: '60866202',
          cidade: 'Fortaleza',
          uf: 'CE',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = response.body._id;
  });
});

describe('GET /accounts/:id', () => {
  it('returns an account found by its id', async () => {
    await request(app)
      .get(`/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /admin/accounts', () => {
  it('updates an account', async () => {
    await request(app)
      .put(`/admin/accounts/${id}`)
      .send({
        nome: 'Teste 2',
        email: 'testee@email.com',
        senha: 'Teste123!',
        cpf: '74170544048',
        telefone: '5537485954837',
        endereco: {
          logradouro: 'Rua Afonso Cavalcante de Oliveira',
          numero: '582',
          complemento: 'Apartamento 10',
          bairro: 'Jangurussu',
          cep: '60866202',
          cidade: 'Fortaleza',
          uf: 'CE',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /admin/accounts/:id', () => {
  it('deletes an account', async () => {
    await request(app)
      .delete(`/admin/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
