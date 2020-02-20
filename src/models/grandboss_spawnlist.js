/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grandboss_spawnlist', {
    boss_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_x: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_y: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_z: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    heading: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    respawn_min_delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '86400'
    },
    respawn_max_delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '129600'
    },
    respawn_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    currentHp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currentMp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'grandboss_spawnlist'
  });
};
