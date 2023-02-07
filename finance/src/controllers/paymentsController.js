const db = require('../models');

class PaymentsController {
    static async createPayment(req, res) {
        const payment = {...req.body, status: 'CRIADO'}
        try {
          const {id, status} = await db.Payments.create(payment);
          return res.status(201).set('Location', `/payments/${id}`).json({id, status});
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
}

module.exports = PaymentsController;