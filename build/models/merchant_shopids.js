"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchant_shopids', {
    shop_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    npc_id: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    tableName: 'merchant_shopids'
  });
};
