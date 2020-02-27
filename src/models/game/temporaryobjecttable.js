/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temporaryObjectTable', {
    object_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'temporaryObjectTable'
  });
};
