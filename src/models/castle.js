/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    taxPercent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '15'
    },
    treasury: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    siegeDate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    regTimeOver: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'true'
    },
    regTimeEnd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'castle'
  });
};
