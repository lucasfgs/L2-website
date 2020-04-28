"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zone_vertices', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'zone_vertices'
  });
};
