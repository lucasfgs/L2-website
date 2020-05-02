/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('donate', {
    donate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payer_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payer_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'donate'
  });
};
