/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchant_areas_list', {
    merchant_area_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    merchant_area_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ''
    },
    tax: {
      type: "DOUBLE(3,2) UNSIGNED",
      allowNull: false,
      defaultValue: '0.00'
    },
    Chaotic: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'merchant_areas_list'
  });
};
