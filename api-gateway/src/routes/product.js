import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const productRoutes = express.Router();

const productProxy = createProxyMiddleware({
  target: 'http://product:3001',
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

productRoutes.get('/products', productProxy);
productRoutes.get('/products/:id', productProxy);
productRoutes.post('/admin/products', authenticateBearer, productProxy);
productRoutes.put('/admin/products/:id', authenticateBearer, productProxy);
productRoutes.delete('/admin/products/:id', authenticateBearer, productProxy);

export default productRoutes;
