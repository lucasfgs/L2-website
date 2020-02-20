/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    allowed_classes: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    titlelist: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    npcs: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    side: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'factions'
  });
};
