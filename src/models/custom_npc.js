/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_npc', {
    id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    idTemplate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    serverSideName: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ''
    },
    serverSideTitle: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    class: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    collision_radius: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    collision_height: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    level: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    attackrange: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hpreg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mpreg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    str: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    con: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dex: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    int: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    wit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    men: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    exp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    patk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pdef: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    matk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mdef: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    atkspd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    aggro: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    matkspd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rhand: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lhand: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    armor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    enchant: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    walkspd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    runspd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    faction_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    faction_range: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    isUndead: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    absorb_level: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0'
    },
    absorb_type: {
      type: DataTypes.ENUM('FULL_PARTY','LAST_HIT','PARTY_ONE_RANDOM'),
      allowNull: false,
      defaultValue: 'LAST_HIT'
    },
    ss: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    bss: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ss_rate: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    AI: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: 'fighter'
    },
    drop_herbs: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'custom_npc'
  });
};
