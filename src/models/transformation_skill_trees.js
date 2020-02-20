/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transformation_skill_trees', {
    skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    skill_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    player_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sp_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    need_itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'transformation_skill_trees'
  });
};
