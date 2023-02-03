import express from 'express';
import ProductController from '../controllers/productsController.js';
import { validateProduct, validateCategoryId } from '../validations/productsValidation.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert { type: "json" };;

const router = express.Router();

router
    .get('/products', ProductController.findProducts)
    .get('/products/:id', ProductController.findProductById)
    .post('/admin/products', validateProduct, validateCategoryId, ProductController.createProduct)
    .put('/admin/products/:id', ProductController.updateProduct)
    .delete('/admin/products/:id', ProductController.deleteProduct)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;