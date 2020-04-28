import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import serveIndex from "serve-index";
import favicon from "express-favicon";
import cors from "cors";
import greenlock from "greenlock-express";

import { Site, Api } from "./routes";
import dbModels from "./models";

const app = express();
// console.log(__dirname);
// greenlock
//   .init({
//     packageRoot: "./",

//     // contact for security and critical bug notices
//     configDir: "./src/greenlock.d",
//     maintainerEmail: "blooodcf@gmail.com",
//     // whether or not to run at cloudscale
//     cluster: false,
//   })
//   // Serves on 80 and 443
//   // Get's SSL certificates magically!
//   .serve(app);

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

// dbModels.sequelize.sync().then(() => {

// });

app.listen(process.env.PORT || 80, () => console.log("Listening"));
