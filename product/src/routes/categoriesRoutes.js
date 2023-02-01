import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import validateCategory from '../validations/categoriesValidation.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert { type: "json" };;

const router = express.Router();

router
    .get('/categories', CategoryController.findCategories)
    .get('/categories/:id', CategoryController.findCategoryById)
    .post('/categories', validateCategory, CategoryController.createCategory)
    .put('/categories/:id', CategoryController.updateCategory)
    .patch('/categories/:id', CategoryController.updateStatusCategory)
    .delete('/categories/:id', CategoryController.deleteCategory)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;