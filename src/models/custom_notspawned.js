/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_notspawned', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    isCustom: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'custom_notspawned'
  });
};
