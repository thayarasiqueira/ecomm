import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
    .get('/admin/orders/:id', OrderController.findOrderById)

export default router;