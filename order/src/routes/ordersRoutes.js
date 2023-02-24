import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
  .get('/orders/:id', OrderController.findOrderById)
  .post('/admin/orders', OrderController.createOrder)
  .patch('/admin/orders/:id', OrderController.confirmOrder);

export default router;
