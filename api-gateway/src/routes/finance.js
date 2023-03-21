import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const financeRoutes = express.Router();
const PORT = process.env.FINANCE_PORT || 3003;

const financeProxy = createProxyMiddleware({
  target: `http://finance:${PORT}`,
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

financeRoutes.get('/payments/:id', authenticateBearer, financeProxy);
financeRoutes.post('/payments', authenticateBearer, financeProxy);
financeRoutes.patch('/admin/payments/:id', authenticateBearer, financeProxy);

export default financeRoutes;
