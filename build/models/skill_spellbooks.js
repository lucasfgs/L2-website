"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_spellbooks', {
    skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    tableName: 'skill_spellbooks'
  });
};
