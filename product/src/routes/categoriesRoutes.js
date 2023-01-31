import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();
//put, delete, patch
router
    .get('/categories', CategoryController.findCategories)
    .get('/categories/:id', CategoryController.findCategoryById)
    .post('/categories', CategoryController.createCategory)
    .put('/categories/:id', CategoryController.updateCategory)
    .patch('/categories/:id', CategoryController.updateStatusCategory)
    .delete('/categories/:id', CategoryController.deleteCategory)

export default router;