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
      allowNull: true
    },
    crystallizable: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    item_type: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    consume_type: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    crystal_type: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'none'
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
      allowNull: true
    },
    dropable: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    destroyable: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tradeable: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oldname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    oldtype: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'etcitem'
  });
};
