import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import serveIndex from "serve-index";
import favicon from "express-favicon";
import cors from "cors";
import https from "https";
import fs from "fs";

import { Site, Api } from "./routes";
import dbModels from "./models";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));
app.use(favicon("public/images/favicon.ico"));
app.use("/updater", serveIndex("public/updater"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Site);
app.use("/api", Api);

dbModels.sequelize.sync().then(() => {
  https
    .createServer(
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("./cert.pem"),
      },
      app
    )
    .listen(process.env.PORT || 80, () => console.log("Listening"));
});
