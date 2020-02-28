import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import serveIndex from "serve-index";

import { Site, Api } from "./routes";
import gameModels from "./models/game";
import loginModels from "./models/login";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/updater", serveIndex("public/updater"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Site);
app.use("/api", Api);

gameModels.sequelize.sync().then(() => {
  loginModels.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 80, () => console.log("Listening"));
  });
});
