"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('henna', {
    symbol_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    symbol_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dye_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dye_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stat_INT: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stat_STR: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stat_CON: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stat_MEM: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stat_DEX: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stat_WIT: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'henna'
  });
};
