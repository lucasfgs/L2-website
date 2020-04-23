/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etcitem', {
    item_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'false'
    },
    item_type: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: 'none'
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    consume_type: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: 'normal'
    },
    material: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'wood'
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'none'
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
    handler: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: 'none'
    },
    skill: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: '0-0;'
    }
  }, {
    tableName: 'etcitem'
  });
};
