import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import validateCategory from '../validations/categoriesValidation.js';

const router = express.Router();

router
    .get('/categories', CategoryController.findCategories)
    .get('/categories/:id', CategoryController.findCategoryById)
    .post('/categories', validateCategory, CategoryController.createCategory)
    .put('/categories/:id', CategoryController.updateCategory)
    .patch('/categories/:id', CategoryController.updateStatusCategory)
    .delete('/categories/:id', CategoryController.deleteCategory)

export default router;