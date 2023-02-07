const { Router } = require('express')
const PaymentsController = require('../controllers/paymentsController.js')

const router = Router();

router
    .get('/payments/:id', PaymentsController.findPaymentById)
    .post('/payments', PaymentsController.createPayment)


module.exports = router;