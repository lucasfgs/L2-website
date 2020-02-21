/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('couples', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player1Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    player2Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    maried: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    affiancedDate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0'
    },
    weddingDate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'couples'
  });
};
