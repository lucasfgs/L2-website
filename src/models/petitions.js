/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petitions', {
    petition_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    charId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    petition_txt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'New'
    }
  }, {
    tableName: 'petitions'
  });
};
