import express from 'express';
import passport from 'passport';
import CategoryController from '../controllers/categoriesController.js';
import validateCategory from '../validations/categoriesValidation.js';

const router = express.Router();
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/categories', CategoryController.findCategories)
  .get('/categories/:id', CategoryController.findCategoryById)
  .post('/admin/categories', authenticateBearer, validateCategory, CategoryController.createCategory)
  .put('/admin/categories/:id', authenticateBearer, CategoryController.updateCategory)
  .patch('/admin/categories/:id', authenticateBearer, CategoryController.updateStatusCategory)
  .delete('/admin/categories/:id', authenticateBearer, CategoryController.deleteCategory);

export default router;
