"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('class_list', {
    class_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'class_list'
  });
};
