"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_hennas', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    symbol_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    slot: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    class_index: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'character_hennas'
  });
};
