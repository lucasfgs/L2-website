/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buffer_scheme_list_vip', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    player_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    scheme_name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    mod_accepted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'buffer_scheme_list_vip'
  });
};
