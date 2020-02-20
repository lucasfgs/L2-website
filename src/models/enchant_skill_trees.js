/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enchant_skill_trees', {
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
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ''
    },
    base_lvl: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    enchant_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sp: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    exp: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    min_skill_lvl: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    success_rate76: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    success_rate77: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    success_rate78: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'enchant_skill_trees'
  });
};
