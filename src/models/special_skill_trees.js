/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('special_skill_trees', {
    skill_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ''
    },
    costid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    cost: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'special_skill_trees'
  });
};
