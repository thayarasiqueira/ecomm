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
}

export default OrderController;