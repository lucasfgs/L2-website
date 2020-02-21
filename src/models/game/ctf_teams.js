/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctf_teams', {
    teamId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    teamName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    teamX: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    teamY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    teamZ: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    teamColor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    flagX: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    flagY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    flagZ: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'ctf_teams'
  });
};
