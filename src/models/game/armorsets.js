/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armorsets', {
    id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chest: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    legs: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    head: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    gloves: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    feet: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    skill_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    skill_lvl: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    shield: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    shield_skill_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    enchant6skill: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'armorsets'
  });
};
