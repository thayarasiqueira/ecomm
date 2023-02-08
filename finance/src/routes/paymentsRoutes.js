const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController.js');
const validateStatus = require('../validations/paymentsValidation.js');

const router = Router();

router
    .get('/payments/:id', PaymentsController.findPaymentById)
    .post('/payments', PaymentsController.createPayment)
    .patch('/payments/:id', validateStatus, PaymentsController.updateStatus)


module.exports = router;