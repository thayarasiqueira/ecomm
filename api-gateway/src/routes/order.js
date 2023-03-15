import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const orderRoutes = express.Router();

const orderProxy = createProxyMiddleware({
  target: 'http://order:3004',
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

orderRoutes.get('/orders/:id', authenticateBearer, orderProxy);
orderRoutes.post('/admin/orders', authenticateBearer, orderProxy);
orderRoutes.patch('/admin/orders/:id', authenticateBearer, orderProxy);

export default orderRoutes;
