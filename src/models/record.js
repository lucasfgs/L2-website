/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('record', {
    maxplayer: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'record'
  });
};
