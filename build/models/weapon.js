"use strict";/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon', {
    item_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: '0'
    },
    bodypart: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ''
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    soulshots: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    spiritshots: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    material: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'wood'
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: '0'
    },
    p_dam: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    rnd_dam: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    weaponType: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    critical: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    hit_modify: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00000'
    },
    avoid_modify: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    shield_def: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    shield_def_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    atk_speed: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    mp_consume: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    m_dam: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    duration: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '-1'
    },
    time: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '-1'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    crystal_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    sellable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    dropable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    destroyable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    tradeable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    depositable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    enchant4_skill_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    enchant4_skill_lvl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCast_skill_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCast_skill_lvl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCast_skill_chance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCrit_skill_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCrit_skill_lvl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    onCrit_skill_chance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    change_weaponId: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    skill: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: '0-0;'
    }
  }, {
    tableName: 'weapon'
  });
};
