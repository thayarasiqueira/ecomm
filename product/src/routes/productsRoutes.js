import express from 'express';
import ProductController from '../controllers/productsController.js';
import { validateProduct, validateCategoryId } from '../validations/productsValidation.js';

const router = express.Router();

router
    .get('/products', ProductController.findProducts)
    .get('/products/:id', ProductController.findProductById)
    .post('/products', validateProduct, validateCategoryId, ProductController.createProduct)
    .put('/products/:id', ProductController.updateProduct)
    .delete('/products/:id', ProductController.deleteProduct)

export default router;