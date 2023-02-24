const db = require('../models/index.js');

class PaymentsController {
  static async findPaymentById(req, res) {
    const { id: idParams } = req.params;
    try {
      const {
        id, valor, nome, cartao, expiracao_cartao: expiracaoCartao, status, createdAt, updatedAt,
      } = await db.Payments.findOne({
        where: {
          id: Number(idParams),
        },
      });
      return res.status(200).json({
        id, valor, nome, cartao, expiracao_cartao: expiracaoCartao, status, createdAt, updatedAt,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPayment(req, res) {
    const payment = { ...req.body, status: 'CRIADO' };
    try {
      const { id, status } = await db.Payments.create(payment);
      const links = [
        {
          rel: 'self',
          method: 'GET',
          href: `http://localhost:3003/admin/payments/${id}`,
        },
        {
          rel: 'confirmation',
          method: 'PATCH',
          status: 'CONFIRMADO',
          href: `http://localhost:3003/admin/payments/${id}`,
        },
        {
          rel: 'cancellation',
          method: 'PATCH',
          status: 'CANCELADO',
          href: `http://localhost:3003/admin/payments/${id}`,
        },
      ];
      return res.status(201).set('Location', `/payments/${id}`).json({ id, status, links });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateStatus(req, res) {
    const { id } = req.params;
    const { status, descricao } = req.body;
    const links = [
      {
        rel: 'self',
        method: 'GET',
        href: `http://localhost:3003/admin/payments/${id}`,
      },
    ];
    try {
      const { status: statusPayment } = await db.Payments.findOne({
        where: {
          id: Number(id),
        },
      });
      if (statusPayment !== 'CRIADO') {
        return res.status(422).json({ message: 'Status change denied!' });
      }
      if (status === 'CONFIRMADO') {
        db.sequelize.transaction(async (t) => {
          await db.Payments.update({ status }, { where: { id: Number(id) } }, { transaction: t });
          await db.Invoices.create({ descricao, payment_id: id }, { transaction: t });
          const updatedPayment = await db.Payments.findOne({ where: { id: Number(id) } });
          return res.status(200).json({ ...updatedPayment, links });
        });
      }
      await db.Payments.update(req.body, { where: { id: Number(id) } });
      const updatedPayment = await db.Payments.findOne({ where: { id: Number(id) } });
      return res.status(200).json({ ...updatedPayment, links });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PaymentsController;
