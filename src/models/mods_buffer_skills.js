/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mods_buffer_skills', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    skill_group: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'default'
    },
    adena: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'mods_buffer_skills'
  });
};
