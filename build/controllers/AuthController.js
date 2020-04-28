"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _models = require('../models'); var _models2 = _interopRequireDefault(_models);
var _passwordEncrypt = require('../utils/passwordEncrypt'); var _passwordEncrypt2 = _interopRequireDefault(_passwordEncrypt);
var _verifyJwt = require('../utils/verifyJwt');

exports. default = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({ error: true, message: "Please insert a email or password" });
      return;
    }

    const encryptedPassword = _passwordEncrypt2.default.call(void 0, password);

    const user = await _models2.default.accounts.findOne({
      where: { [_sequelize.Op.and]: { email, password: encryptedPassword } },
    });

    if (user) {
      const { login, name } = user;
      const token = _jsonwebtoken2.default.sign({ login, email, name }, process.env.JWT_SECRET);

      res.json({ token, user: { login, name, email } });
    } else {
      res.json({ error: true, message: "Invalid credentials" });
      return;
    }
  },

  async isLogged(req, res) {
    const { token } = req.body;

    _verifyJwt.verifyJWTToken.call(void 0, token)
      .then((decodedToken) => {
        res.json({ success: true });
      })
      .catch((err) => {
        res.json({ success: false });
      });
  },
};
