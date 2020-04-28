"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kamaloka', {
    charID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    HallAbyss: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    LabyrinthAbyss: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'kamaloka'
  });
};
