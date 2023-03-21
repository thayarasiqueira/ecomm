import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const accountRoutes = express.Router();
const PORT = process.env.ACCOUNT_PORT || 3002;

const accountProxy = createProxyMiddleware({
  target: `http://account:${PORT}`,
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

accountRoutes.get('/admin/accounts', authenticateBearer, accountProxy);
accountRoutes.post('/accounts/login', authenticateBearer, accountProxy);
accountRoutes.get('/accounts/:id', accountProxy);
accountRoutes.post('/admin/accounts', accountProxy);
accountRoutes.put('/admin/accounts/:id', authenticateBearer, accountProxy);
accountRoutes.delete('/admin/accounts/:id', authenticateBearer, accountProxy);
accountRoutes.get('/accounts/logout', authenticateBearer, accountProxy);

export default accountRoutes;
