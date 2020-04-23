/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buffer_buff_list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buff_class: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    buffType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    buffId: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    },
    buffLevel: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    forClass: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    canUse: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'buffer_buff_list'
  });
};
