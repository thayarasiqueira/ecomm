const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController.js');

const router = Router();

router
  .get('/payments/:id', PaymentsController.findPaymentById)
  .post('/payments', PaymentsController.createPayment)
  .patch('/admin/payments/:id', PaymentsController.updateStatus);

module.exports = router;
