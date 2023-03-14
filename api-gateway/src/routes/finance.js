import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const financeRoutes = express.Router();

const financeProxy = createProxyMiddleware({
  target: 'http://finance:3003',
  changeOrigin: true,
});

financeRoutes.get('/payments/:id', financeProxy);
financeRoutes.post('/payments', financeProxy);
financeRoutes.patch('/admin/payments/:id', financeProxy);

export default financeRoutes;
