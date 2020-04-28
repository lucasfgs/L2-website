"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pledge_skill_trees', {
    skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    clan_lvl: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    repCost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    itemCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'pledge_skill_trees'
  });
};
