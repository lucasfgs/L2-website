import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import serveIndex from "serve-index";
import favicon from "express-favicon";
import cors from "cors";
import https from "https";
import http from "http";
import fs from "fs";

import { Site, Api } from "./routes";
import dbModels from "./models";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));
app.use(express.static("react"));
app.use(favicon("public/images/favicon.ico"));
app.use("/updater", serveIndex("public/updater"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Site);
app.use("/api", Api);

dbModels.sequelize.sync().then(() => {
  app.listen(80);
  //   https
  //     .createServer(
  //       {
  //         key: fs.readFileSync(process.env.SSL_KEY),
  //         cert: fs.readFileSync(process.env.SSL_CERT),
  //       },
  //       app
  //     )
  //     .listen(443, () => console.log("SSL server running"));

  //   http
  //     .createServer((req, res) => {
  //       res.writeHead(301, {
  //         Location: "https://" + req.headers["host"] + req.url,
  //       });
  //       res.end();
  //     })
  //     .listen(80, () => console.log("HTTP redirection server running"));
});
