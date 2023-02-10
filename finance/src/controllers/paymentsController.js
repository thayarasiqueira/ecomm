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
          const links =  [
            {     
              rel: "self",
              method: "GET",
              href: `https://http://localhost:3003/admin/payments/${id}`
            },
            {     
              rel: "confirmation",
              method: "PATCH",
              status: "CONFIRMADO",
              href: `https://http://localhost:3003/admin/payments/${id}`
            },
            {     
              rel: "cancellation",
              method: "PATCH",
              status: "CANCELADO",
              href: `https://http://localhost:3003/admin/payments/${id}`
            }
          ];
          return res.status(201).set('Location', `/payments/${id}`).json({id, status, links});
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }

      static async updateStatus(req, res) {
        const { id } = req.params;
        const { status, descricao } = req.body;
        const links =  [
          {     
            rel: "self",
            method: "GET",
            href: `https://http://localhost:3003/admin/payments/${id}`
          }
        ];
        try {
          if(status === 'CONFIRMADO') {
            db.sequelize.transaction(async (t) => {
              await db.Payments.update({status}, { where: { id: Number(id) }}, {transaction: t});
              await db.Invoices.create({descricao, payment_id: id}, {transaction: t});
              const updatedPayment = await db.Payments.findOne( { where: { id: Number(id) }});
              return res.status(200).json({...updatedPayment, links});
            })
          } else {
            await db.Payments.update(req.body, { where: { id: Number(id) }});
            const updatedPayment = await db.Payments.findOne( { where: { id: Number(id) }});
            return res.status(200).json({...updatedPayment, links});
          }
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
}

module.exports = PaymentsController;