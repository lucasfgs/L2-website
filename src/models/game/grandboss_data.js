/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grandboss_data', {
    boss_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_x: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loc_y: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loc_z: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    heading: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    respawn_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    currentHP: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currentMP: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'grandboss_data'
  });
};
