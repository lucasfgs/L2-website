/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "characters",
    {
      account_name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      charId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: "0",
        primaryKey: true
      },
      char_name: {
        type: DataTypes.STRING(35),
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      maxHp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      curHp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      maxCp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      curCp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      maxMp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      curMp: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true
      },
      face: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      hairStyle: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      hairColor: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      sex: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      heading: {
        type: DataTypes.INTEGER(9),
        allowNull: true
      },
      x: {
        type: DataTypes.INTEGER(9),
        allowNull: true
      },
      y: {
        type: DataTypes.INTEGER(9),
        allowNull: true
      },
      z: {
        type: DataTypes.INTEGER(9),
        allowNull: true
      },
      exp: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: "0"
      },
      expBeforeDeath: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: "0"
      },
      sp: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      karma: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
      },
      pvpkills: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: true
      },
      pkkills: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: true
      },
      clanid: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
      },
      race: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      classid: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      base_class: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      transform_id: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      deletetime: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      cancraft: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING(16),
        allowNull: true
      },
      rec_have: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      rec_left: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      accesslevel: {
        type: DataTypes.INTEGER(9),
        allowNull: true,
        defaultValue: "0"
      },
      online: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      onlinetime: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      char_slot: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      newbie: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true,
        defaultValue: "1"
      },
      lastAccess: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      clan_privs: {
        type: DataTypes.INTEGER(8).UNSIGNED,
        allowNull: true,
        defaultValue: "0"
      },
      wantspeace: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true,
        defaultValue: "0"
      },
      isin7sdungeon: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      in_jail: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true,
        defaultValue: "0"
      },
      jail_timer: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: "0"
      },
      power_grade: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true
      },
      nobless: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      subpledge: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
        defaultValue: "0"
      },
      last_recom_date: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: "0"
      },
      lvl_joined_academy: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      apprentice: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      sponsor: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      varka_ketra_ally: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: "0"
      },
      clan_join_expiry_time: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: "0"
      },
      clan_create_expiry_time: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: "0"
      },
      death_penalty_level: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "characters"
    }
  );
};
