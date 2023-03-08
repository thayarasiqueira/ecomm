import express from 'express';
import passport from 'passport';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/orders/:id', authenticateBearer, OrderController.findOrderById)
  .post('/admin/orders', authenticateBearer, OrderController.createOrder)
  .patch('/admin/orders/:id', authenticateBearer, OrderController.confirmOrder);

export default router;
