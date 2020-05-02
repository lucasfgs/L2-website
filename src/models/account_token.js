/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_token', {
    tokenId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expires: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'account_token'
  });
};
