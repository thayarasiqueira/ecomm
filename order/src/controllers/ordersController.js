import Order from '../models/Order.js';
import { fetchAccount, fetchPayment } from '../utils/fetchAPIs.js';

class OrderController {
  static findOrderById = (req, res) => {
    const { id } = req.params;
    Order.findById(id, (err, order) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(order);
      }
    });
  };

  static createOrder = (req, res) => {
    const order = { ...req.body, status: 'REALIZADO', createdDate: Date() };
    const newOrder = new Order(order);
    newOrder.save((err, createdOrder) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).set('Location', `/admin/Orders/${order.id}`).json(createdOrder);
      }
    });
  };

  static confirmOrder = async (req, res) => {
    const { id } = req.params;
    const { idPayment } = req.body;

    Order.findByIdAndUpdate(id, { $set: { status: 'PAGO' } }, { new: true }, (err, order) => {
      if (!err) {
        res.status(200).send({ message: 'Order successfully updated' });
      } else {
        res.status(500).set('Location', `/admin/Orders/${order.id}`).send({ message: err.message });
      }
    });

    Order.findById(id, async (err, order) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        const { nome, cpf, endereco } = await fetchAccount(order.clienteId);
        const payload = {
          nome, cpf, endereco, itens: order.itens,
        };
        await fetchPayment(payload, idPayment);
      }
    });
  };
}

export default OrderController;
