/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mods_buffer_schemes', {
    ownerId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    scheme: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'default'
    }
  }, {
    tableName: 'mods_buffer_schemes'
  });
};
