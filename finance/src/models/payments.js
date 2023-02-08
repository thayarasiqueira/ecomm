'use strict'
module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    cartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is:  /^[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]$/
      }
    },
    expiracao_cartao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is:  /^20[2-9][0-9]-(0[1-9]|10|11|12)$/
          }
      },
    cvv: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]|[0-9]|[0-9]$/
          }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['CRIADO', 'CONFIRMADO','CANCELADO']],
        }
      },
  })
  Payments.associate = function(models) {
    Payments.hasOne(models.Invoices, {
      foreignKey: 'payment_id'
    })
  };
  return Payments;
}