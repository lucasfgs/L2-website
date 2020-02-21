/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    loc_id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_x: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_y: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_zmin: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    loc_zmax: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    proc: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'locations'
  });
};
