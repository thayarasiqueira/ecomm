import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const orderRoutes = express.Router();
const PORT = process.env.ORDER_PORT || 3004;

const orderProxy = createProxyMiddleware({
  target: `http://order:${PORT}`,
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

orderRoutes.get('/orders/:id', authenticateBearer, orderProxy);
orderRoutes.post('/admin/orders', authenticateBearer, orderProxy);
orderRoutes.patch('/admin/orders/:id', authenticateBearer, orderProxy);

export default orderRoutes;
