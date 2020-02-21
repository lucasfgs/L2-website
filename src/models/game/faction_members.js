/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faction_members', {
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    faction_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    faction_points: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    contributions: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    join_date: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'faction_members'
  });
};
