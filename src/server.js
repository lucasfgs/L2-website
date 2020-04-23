import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import serveIndex from "serve-index";
import cors from "cors";

import { Site, Api } from "./routes";
import dbModels from "./models";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));
app.use("/updater", serveIndex("public/updater"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Site);
app.use("/api", Api);

dbModels.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 80, () => console.log("Listening"));
});
