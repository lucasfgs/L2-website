/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boxes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    spawn: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    npcid: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    drawer: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    itemid: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    count: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    enchant: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'boxes'
  });
};
