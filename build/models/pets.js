"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pets', {
    item_obj_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    level: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    curHp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    curMp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    exp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fed: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    weapon: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    armor: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    jewel: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    tableName: 'pets'
  });
};
