/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchants', {
    npc_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    merchant_area_id: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'merchants'
  });
};
