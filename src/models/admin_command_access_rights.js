/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_command_access_rights', {
    adminCommand: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'admin_',
      primaryKey: true
    },
    accessLevels: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'admin_command_access_rights'
  });
};
