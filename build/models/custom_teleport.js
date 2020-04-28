"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_teleport', {
    Description: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_x: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    loc_y: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    loc_z: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fornoble: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'custom_teleport'
  });
};
