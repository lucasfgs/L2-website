/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('augmentations', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    attributes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    skill: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'augmentations'
  });
};
