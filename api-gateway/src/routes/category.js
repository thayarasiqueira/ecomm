import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const categoryRoutes = express.Router();

const categoriesProxy = createProxyMiddleware({
  target: 'http://product:3001',
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

categoryRoutes.get('/categories', categoriesProxy);
categoryRoutes.get('/categories/:id', categoriesProxy);
categoryRoutes.post('/admin/categories', authenticateBearer, categoriesProxy);
categoryRoutes.put('/admin/categories/:id', authenticateBearer, categoriesProxy);
categoryRoutes.patch('/admin/categories/:id', authenticateBearer, categoriesProxy);
categoryRoutes.delete('/admin/categories/:id', authenticateBearer, categoriesProxy);

export default categoryRoutes;
