import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../../src/app.js';

describe('GET /products', () => {
  it('returns all products', async () => {
    await request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /admin/products', () => {
  it('creates a product', async () => {
    const response = await request(app)
      .post('/admin/products')
      .send({
        nome: 'TESTE',
        descricao: 'TESTE',
        slug: 'teste',
        preco: 3523.00,
        quantidade: 1,
        categoria: {
          nome: 'INFORMÁTICA',
          categoria_id: '63e251754f5362e79c3c8dbc',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = response.body._id;
  });
});

describe('GET /products/:id', () => {
  it('returns a product found by its id', async () => {
    await request(app)
      .get(`/products/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /admin/products', () => {
  it('updates a product', async () => {
    await request(app)
      .put(`/admin/products/${id}`)
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6" FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 3523.00,
        quantidade: 2,
        categoria: {
          nome: 'INFORMÁTICA',
          categoria_id: '63e251754f5362e79c3c8dbc',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /admin/products/:id', () => {
  it('deletes a product', async () => {
    await request(app)
      .delete(`/admin/products/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
