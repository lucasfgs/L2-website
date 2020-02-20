/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version', {
    dbVersion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'version'
  });
};
