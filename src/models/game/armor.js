/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armor', {
    item_id: {
      type: DataTypes.INTEGER(11),
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
      allowNull: false,
      defaultValue: ''
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ''
    },
    armor_type: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ''
    },
    weight: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    material: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ''
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ''
    },
    avoid_modify: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    duration: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
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
      allowNull: true
    },
    sellable: {
      type: DataTypes.STRING(5),
      allowNull: true
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
    skill: {
      type: DataTypes.STRING(70),
      allowNull: true,
      defaultValue: '0-0;'
    }
  }, {
    tableName: 'armor'
  });
};
