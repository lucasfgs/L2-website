/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buff_templates', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    skill_name: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    skill_level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    skill_force: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    skill_order: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    char_min_level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    char_max_level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    char_race: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    char_class: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    char_faction: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    price_adena: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    price_points: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'buff_templates'
  });
};
