/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pets_skills', {
    templateId: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    minLvl: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    skillId: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skillLvl: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'pets_skills'
  });
};
