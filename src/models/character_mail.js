/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_mail', {
    charId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    letterId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    senderId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    recipientNames: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    sentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unread: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'character_mail'
  });
};
