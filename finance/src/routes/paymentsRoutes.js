const { Router } = require('express');
const passport = require('passport');
const PaymentsController = require('../controllers/paymentsController.js');

const router = Router();
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/payments/:id', authenticateBearer, PaymentsController.findPaymentById)
  .post('/payments', authenticateBearer, PaymentsController.createPayment)
  .patch('/admin/payments/:id', authenticateBearer, PaymentsController.updateStatus);

module.exports = router;
