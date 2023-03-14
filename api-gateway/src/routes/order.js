import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const orderRoutes = express.Router();

const orderProxy = createProxyMiddleware({
  target: 'http://order:3004',
  changeOrigin: true,
});

orderRoutes.get('/orders/:id', orderProxy);
orderRoutes.post('/admin/orders', orderProxy);
orderRoutes.patch('/admin/orders/:id', orderProxy);

export default orderRoutes;
