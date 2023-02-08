const db = require('../models');

class PaymentsController {
    static async findPaymentById(req, res) {
        const { id:idParams } = req.params;
        try {
          const {id, valor, nome, cartao, expiracao_cartao, status, createdAt, updatedAt} = await db.Payments.findOne( { 
            where: { 
              id: Number(idParams)
            }
          })
          return res.status(200).json({id, valor, nome, cartao, expiracao_cartao, status, createdAt, updatedAt});
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }

    static async createPayment(req, res) {
        const payment = {...req.body, status: 'CRIADO'};
        try {
          const {id, status} = await db.Payments.create(payment);
          return res.status(201).set('Location', `/payments/${id}`).json({id, status});
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }

      static async updateStatus(req, res) {
        const { id } = req.params;
        const { status, descricao } = req.body;
        try {
          if(status === 'CONFIRMADO') {
            db.sequelize.transaction(async (t) => {
              await db.Payments.update({status}, { where: { id: Number(id) }}, {transaction: t});
              await db.Invoices.create({descricao, payment_id: id}, {transaction: t});
              const updatedPayment = await db.Payments.findOne( { where: { id: Number(id) }});
              return res.status(200).json(updatedPayment);
            })
          } else {
            await db.Payments.update(req.body, { where: { id: Number(id) }});
            const updatedPayment = await db.Payments.findOne( { where: { id: Number(id) }});
            return res.status(200).json(updatedPayment);
          }
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
}

module.exports = PaymentsController;