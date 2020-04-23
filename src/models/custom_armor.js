/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_armor', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    bodypart: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'none'
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    armor_type: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'none'
    },
    weight: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    material: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'wood'
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'none'
    },
    avoid_modify: {
      type: DataTypes.INTEGER(1),
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
    p_def: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    m_def: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    mp_bonus: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(11),
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
    enchant4_skill: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: '0-0'
    },
    skill: {
      type: DataTypes.STRING(70),
      allowNull: true,
      defaultValue: '0-0;'
    }
  }, {
    tableName: 'custom_armor'
  });
};
