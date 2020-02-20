import Sequelize from "sequelize";

import Character from "../models/characters";

const connection = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: false
  }
});

connection.sync({ force: false });

export default connection;
