/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boxaccess', {
    spawn: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    charname: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'boxaccess'
  });
};
