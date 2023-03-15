import express from 'express';
import passport from 'passport';
import { createProxyMiddleware } from 'http-proxy-middleware';

const productRoutes = express.Router();
const PORT = process.env.PRODUCT_PORT || 3001;

const productProxy = createProxyMiddleware({
  target: `http://product:${PORT}`,
  changeOrigin: true,
});

const authenticateBearer = passport.authenticate('bearer', { session: false });

productRoutes.get('/products', productProxy);
productRoutes.get('/products/:id', productProxy);
productRoutes.post('/admin/products', authenticateBearer, productProxy);
productRoutes.put('/admin/products/:id', authenticateBearer, productProxy);
productRoutes.delete('/admin/products/:id', authenticateBearer, productProxy);

export default productRoutes;
