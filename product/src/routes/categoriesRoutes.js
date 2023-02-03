import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import validateCategory from '../validations/categoriesValidation.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert { type: "json" };;

const router = express.Router();

router
    .get('/categories', CategoryController.findCategories)
    .get('/categories/:id', CategoryController.findCategoryById)
    .post('/admin/categories', validateCategory, CategoryController.createCategory)
    .put('/admin/categories/:id', CategoryController.updateCategory)
    .patch('/admin/categories/:id', CategoryController.updateStatusCategory)
    .delete('/admin/categories/:id', CategoryController.deleteCategory)

export default router;