"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('random_spawn', {
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    npcId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    initialDelay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '-1'
    },
    respawnDelay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '-1'
    },
    despawnDelay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '-1'
    },
    broadcastSpawn: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    randomSpawn: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'true'
    }
  }, {
    tableName: 'random_spawn'
  });
};
