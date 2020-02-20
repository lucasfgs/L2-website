/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transform_skill_trees', {
    race_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    level: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    sp: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    min_level: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'transform_skill_trees'
  });
};
