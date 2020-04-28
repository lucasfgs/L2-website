"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _models = require('../models'); var _models2 = _interopRequireDefault(_models);
var _passwordEncrypt = require('../utils/passwordEncrypt'); var _passwordEncrypt2 = _interopRequireDefault(_passwordEncrypt);
var _mail = require('../services/mail');
var _mailTemplates = require('../mailTemplates');
var _expressvalidator = require('express-validator');

exports. default = {
  async createAccount(req, res) {
    const { name, email, login, password } = req.body;
    const result = _expressvalidator.validationResult.call(void 0, req);

    if (result.errors) {
      const errors = result.errors;

      if (!result.isEmpty()) {
        res.render("register", {
          errors,
        });
        return;
      }
    }
    const emailOrLoginExists = await _models2.default.accounts.findOne({
      where: { [_sequelize.Op.or]: { login, email } },
    });
    if (emailOrLoginExists) {
      res.render("register", {
        errors: [{ msg: "E-mail or login already exists!" }],
      });
      return;
    }

    const account = await _models2.default.accounts.create({
      name,
      email,
      login,
      password: _passwordEncrypt2.default.call(void 0, password),
    });

    if (account) {
      const hash = await _bcrypt2.default.hash(email, 2);

      const expireDate = new Date(Date.now());

      await _models2.default.account_token.create({
        login: account.login,
        token: hash,
        createdAt: new Date(Date.now()),
        expires: expireDate.setHours(expireDate.getHours() + 2),
      });

      _mail.sendMail.call(void 0, 
        email,
        "Account creation",
        _mailTemplates.registerAccount.call(void 0, name, login, password, hash)
      );
      res.render("register", {
        success: true,
      });
      return;
    }
  },

  async confirmAccount(req, res) {
    const { token: hash } = req.query;

    const token = await _models2.default.account_token.findOne({ where: { token: hash } });

    if (!token) return;

    const account = await _models2.default.accounts.findOne({
      where: { login: token.login },
    });

    if (!account) return;

    const updatedAccount = await account.update({ isActive: 1 });

    res.render("confirm", { success: true });
  },
};
