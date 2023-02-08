import orders from '../models/Order.js';

class OrderController {
    
    static findOrderById = (req, res) => {
        const { id } = req.params;
        orders.findById(id, (err, order) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(200).json(order);
              }
        })
    }

    static createOrder = (req, res) => {
        const order = new orders(req.body);
        const newOrder = {...order, status: 'REALIZADO'};
        newOrder.save((err, order) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(201).set('Location', `/admin/orders/${order.id}`).json(order);
              }
        })
    }

    static confirmOrder = (req, res) => {
        const { id } = req.params;
    
        orders.findByIdAndUpdate(id, {$set: {status: 'PAGO'}}, { new: true}, (err, account) => {
          if(!err) {
            res.status(200).send({message: 'Order successfully updated'})
          } else {
            res.status(500).set('Location', `/admin/accounts/${account.id}`).send({message: err.message})
          }
        })
      }
}

export default OrderController;