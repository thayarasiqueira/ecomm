const db = require('../models');

const validateStatus = async (req, res, next) => {
    const { id } = req.params;
    try {
      const {status} = await db.Payments.findOne( { 
        where: { 
          id: Number(id)
        }
      })
    if (status === 'CONFIRMADO') {
        return res.status(422).json({message: 'Status change denied!'});
      }
    if (status === 'CANCELADO') {
        return res.status(422).json({message: 'Status change denied!'});
    }
    if (req.body.status === 'CONFIRMADO') {
        confirmOrder();
    }
      next();
    } catch (error) {
      return res.status(500).json(error.message);
    }
}

const confirmOrder = () => {
    
}

module.exports = validateStatus;