/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon', {
    item_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    bodypart: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    soulshots: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    spiritshots: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    p_dam: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rnd_dam: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    weaponType: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    critical: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hit_modify: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    avoid_modify: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shield_def: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shield_def_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    atk_speed: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mp_consume: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    m_dam: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    crystal_count: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sellable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'true'
    },
    dropable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'true'
    },
    destroyable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'true'
    },
    tradeable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'true'
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
      allowNull: true,
      defaultValue: '0-0;'
    }
  }, {
    tableName: 'weapon'
  });
};
