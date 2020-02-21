/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('random_spawn_loc', {
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    z: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    heading: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    }
  }, {
    tableName: 'random_spawn_loc'
  });
};
