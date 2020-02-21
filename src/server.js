import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import routes from "./routes";
import gameModels from "./models/game";
import loginModels from "./models/login";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

gameModels.sequelize.sync().then(() => {
  loginModels.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 80, () => console.log("Listening"));
  });
});
