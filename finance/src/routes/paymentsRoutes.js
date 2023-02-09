const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController.js');
const validateStatus = require('../validations/paymentsValidation.js');

const router = Router();

router
    .get('/admin/payments/:id', PaymentsController.findPaymentById)
    .post('/admin/payments', PaymentsController.createPayment)
    .patch('/admin/payments/:id', validateStatus, PaymentsController.updateStatus)


module.exports = router;