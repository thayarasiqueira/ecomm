import express from 'express';
import passport from 'passport';
import ProductController from '../controllers/productsController.js';
import { validateProduct, validateCategoryId } from '../validations/productsValidation.js';

const router = express.Router();
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/products', authenticateBearer, ProductController.findProducts)
  .get('/products/:id', ProductController.findProductById)
  .post('/admin/products', authenticateBearer, validateProduct, validateCategoryId, ProductController.createProduct)
  .put('/admin/products/:id', authenticateBearer, ProductController.updateProduct)
  .delete('/admin/products/:id', authenticateBearer, ProductController.deleteProduct);

export default router;
