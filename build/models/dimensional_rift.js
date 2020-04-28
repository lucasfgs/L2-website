"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dimensional_rift', {
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    xMin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    xMax: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    yMin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    yMax: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    zMin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    zMax: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    xT: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    yT: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    zT: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    boss: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'dimensional_rift'
  });
};
