'use strict'
module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
      descricao: {
        allowNull: false,
        type: DataTypes.TEXT,
           get: function () {
                return JSON.parse(this.getDataValue('descricao'));
            },
            set: function (value) {
                this.setDataValue('descricao', JSON.stringify(value));
            },
      },
  })
  Invoices.associate = function(models) {
    Invoices.belongsTo(models.Payments, {
      foreignKey: 'payment_id'
    })
  };
  return Invoices;
};