import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const productRoutes = express.Router();

const productProxy = createProxyMiddleware({
  target: 'http://product:3001',
  changeOrigin: true,
});

productRoutes.get('/products', productProxy);
productRoutes.get('/products/:id', productProxy);
productRoutes.post('/admin/products', productProxy);
productRoutes.put('/admin/products/:id', productProxy);
productRoutes.delete('/admin/products/:id', productProxy);

export default productRoutes;
