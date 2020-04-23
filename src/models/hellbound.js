/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hellbound', {
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    trustLevel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    zonesLevel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'hellbound'
  });
};
