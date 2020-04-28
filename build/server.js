"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _serveindex = require('serve-index'); var _serveindex2 = _interopRequireDefault(_serveindex);
var _expressfavicon = require('express-favicon'); var _expressfavicon2 = _interopRequireDefault(_expressfavicon);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _greenlockexpress = require('greenlock-express'); var _greenlockexpress2 = _interopRequireDefault(_greenlockexpress);

var _routes = require('./routes');
var _models = require('./models'); var _models2 = _interopRequireDefault(_models);

const app = _express2.default.call(void 0, );
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

app.set("views", _path2.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(_cors2.default.call(void 0, ));
app.use(_express2.default.static("public"));
app.use(_expressfavicon2.default.call(void 0, "public/images/favicon.ico"));
app.use("/updater", _serveindex2.default.call(void 0, "public/updater"));
app.use(_bodyparser2.default.urlencoded({ extended: true }));
app.use(_bodyparser2.default.json());
app.use(_routes.Site);
app.use("/api", _routes.Api);

// dbModels.sequelize.sync().then(() => {

// });

app.listen(process.env.PORT || 80, () => console.log("Listening"));
