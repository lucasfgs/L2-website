"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buffer_scheme_contents_vip', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    scheme_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    skill_level: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    buff_class: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    }
  }, {
    tableName: 'buffer_scheme_contents_vip'
  });
};
