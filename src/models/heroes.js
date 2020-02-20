/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('heroes', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    char_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ''
    },
    class_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    played: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'heroes'
  });
};
