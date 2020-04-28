"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _expressvalidator = require('express-validator');
var _CharacterController = require('../controllers/CharacterController');
var _AccountController = require('../controllers/AccountController'); var _AccountController2 = _interopRequireDefault(_AccountController);
var _gameserver = require('../services/gameserver');

const routes = _express.Router.call(void 0, );

routes.get("/", async (req, res) => {
  _gameserver.getGameserverStatus.call(void 0, )
    .then(async (serverStatus) => {
      const playersOnline = await _CharacterController.getOnlinePlayers.call(void 0, );

      res.render("home", { playersOnline, serverStatus });
    })
    .catch((error) => {
      res.render("home", { playersOnline: 0, serverStatus: "Offline" });
    });
});

routes.get("/download", async (req, res) => {
  res.render("download");
});

routes.get("/register", async (req, res) => {
  res.render("register");
});

routes.post(
  "/register",
  [
    _expressvalidator.check.call(void 0, "name").notEmpty().withMessage("Name cannot be empty"),
    _expressvalidator.check.call(void 0, "password")
      .isLength({ min: 6 })
      .withMessage("Password must contain at least 6 characters"),
    _expressvalidator.check.call(void 0, "email").isEmail().withMessage("Invalid e-mail"),
    _expressvalidator.check.call(void 0, "login")
      .isLength({ min: 5 })
      .withMessage("Login must contain at least 5 characters"),
    _expressvalidator.check.call(void 0, "terms")
      .exists()
      .withMessage("Please confirm our terms & conditions"),
  ],
  _AccountController2.default.createAccount
);

routes.get("/confirm", _AccountController2.default.confirmAccount);

exports. default = routes;
