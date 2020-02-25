/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts', {
    login: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lastactive: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    accessLevel: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    lastIP: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    lastServer: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'accounts'
  });
};
