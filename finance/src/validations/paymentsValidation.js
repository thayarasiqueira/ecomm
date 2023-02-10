const db = require('../models');

const validateStatus = async (req, res, next) => {
    const { id } = req.params;
    try {
      const {status} = await db.Payments.findOne( { 
        where: { 
          id: Number(id)
        }
      })
    if (status === 'CONFIRMADO' || status === 'CANCELADO') {
        return res.status(422).json({message: 'Status change denied!'});
    }
      next();
    } catch (error) {
      return res.status(500).json(error.message);
    }
}

module.exports = validateStatus;