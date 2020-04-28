"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_residential', {
    entityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    skillId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skillLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'skill_residential'
  });
};
