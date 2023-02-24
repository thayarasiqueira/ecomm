import app from '../../src/app.js';
import { describe, it } from '@jest/globals';
import request from 'supertest';

describe('GET /categories', ()=> {
    it('returns all categories', async ()=> {
        await request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
})

let id;
describe('POST /admin/categories', ()=> {
    it('creates a category', async ()=> {
        const response = await request(app)
            .post('/admin/categories')
            .send({
                    nome: 'TESTE',
                    status: 'ATIVA'
              })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);

        id = response.body._id;
    })
})

describe('GET /categories/:id', ()=> {
    it('returns a category found by its id', async ()=> {
        await request(app)
            .get(`/categories/${id}`)
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
})

describe('PUT /admin/categories', ()=> {
    it('updates a category', async ()=> {
        await request(app)
            .put(`/admin/categories/${id}`)
            .send({
                nome: 'TESTE',
                status: 'INATIVA'
              })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
})

describe('DELETE /admin/categories/:id', ()=> {
    it('deletes a category', async ()=> {
        await request(app)
            .delete(`/admin/categories/${id}`)
            .set('Accept', 'application/json')
            .expect(204);
    })
})