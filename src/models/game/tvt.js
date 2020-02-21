/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvt', {
    eventName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    eventDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    joiningLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    minlvl: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    maxlvl: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    npcId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    npcX: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    npcY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    npcZ: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    npcHeading: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    rewardId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    rewardAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    teamsCount: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    joinTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    eventTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    minPlayers: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    maxPlayers: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tvt'
  });
};
