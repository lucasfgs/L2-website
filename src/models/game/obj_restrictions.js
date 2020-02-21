/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obj_restrictions', {
    entry_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    obj_Id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    message: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'obj_restrictions'
  });
};
