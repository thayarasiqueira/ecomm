import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const categoryRoutes = express.Router();

const categoriesProxy = createProxyMiddleware({
  target: 'http://product:3001',
  changeOrigin: true,
});

categoryRoutes.get('/categories', categoriesProxy);
categoryRoutes.get('/categories/:id', categoriesProxy);
categoryRoutes.post('/admin/categories', categoriesProxy);
categoryRoutes.put('/admin/categories/:id', categoriesProxy);
categoryRoutes.patch('/admin/categories/:id', categoriesProxy);
categoryRoutes.delete('/admin/categories/:id', categoriesProxy);

export default categoryRoutes;
