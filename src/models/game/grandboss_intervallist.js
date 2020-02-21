/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grandboss_intervallist', {
    bossId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    respawnDate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'grandboss_intervallist'
  });
};
