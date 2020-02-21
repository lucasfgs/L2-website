/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faction_quests', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    faction_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: '0'
    },
    reward: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    mobid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    min_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'faction_quests'
  });
};
