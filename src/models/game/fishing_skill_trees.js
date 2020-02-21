/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fishing_skill_trees', {
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
    sp: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    min_level: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
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
    },
    isfordwarf: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'fishing_skill_trees'
  });
};
