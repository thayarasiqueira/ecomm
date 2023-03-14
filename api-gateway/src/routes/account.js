import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const accountRoutes = express.Router();

const accountProxy = createProxyMiddleware({
  target: 'http://account:3002',
  changeOrigin: true,
});

accountRoutes.get('/admin/accounts', accountProxy);
accountRoutes.post('/accounts/login', accountProxy);
accountRoutes.get('/accounts/:id', accountProxy);
accountRoutes.post('/admin/accounts', accountProxy);
accountRoutes.put('/admin/accounts/:id', accountProxy);
accountRoutes.delete('/admin/accounts/:id', accountProxy);
accountRoutes.get('/accounts/logout', accountProxy);

export default accountRoutes;
