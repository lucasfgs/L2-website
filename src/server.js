import "dotenv/config";
import express from "express";
import path from "path";

import routes from "./routes";
import sequelize from "./services/database";
import models from "./models";

const app = express();
sequelize;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(routes);

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 80, () => console.log("Listening"));
});
