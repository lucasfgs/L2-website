/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gm_audit', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gm_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    param: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'gm_audit'
  });
};
