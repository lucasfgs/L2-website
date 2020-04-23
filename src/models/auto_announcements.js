/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_announcements', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    initial: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    delay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '600000'
    },
    cycle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'auto_announcements'
  });
};
