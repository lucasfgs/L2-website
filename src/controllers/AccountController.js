import { Op } from "sequelize";
import bcrypt from "bcrypt";
import model from "../models/login";
import passwordEncrypt from "../utils/passwordEncrypt";
import { sendMail } from "../services/mail";
import { registerAccount } from "../mailTemplates";
import { validationResult } from "express-validator";

export default {
  async createAccount(req, res) {
    const { name, email, login, password } = req.body;
    const result = validationResult(req);

    if (result.errors) {
      const errors = result.errors;

      if (!result.isEmpty()) {
        res.render("register", {
          errors
        });
        return;
      }
    }
    const emailOrLoginExists = await model.accounts.findOne({
      where: { [Op.or]: { login, email } }
    });
    if (emailOrLoginExists) {
      res.render("register", {
        errors: [{ msg: "E-mail or login already exists!" }]
      });
      return;
    }

    const account = await model.accounts.create({
      name,
      email,
      login,
      password: passwordEncrypt(password)
    });

    if (account) {
      const hash = await bcrypt.hash(email, 2);

      const expireDate = new Date(Date.now());

      await model.account_token.create({
        login: account.login,
        token: hash,
        createdAt: new Date(Date.now()),
        expires: expireDate.setHours(expireDate.getHours() + 2)
      });

      sendMail(
        email,
        "Account creation",
        registerAccount(name, login, password, hash)
      );
      res.render("register", {
        success: true
      });
      return;
    }
  },

  async confirmAccount(req, res) {
    const { token: hash } = req.query;

    const token = await model.account_token.findOne({ where: { token: hash } });

    if (!token) return;

    const account = await model.accounts.findOne({
      where: { login: token.login }
    });

    if (!account) return;

    const updatedAccount = await account.update({ isActive: 1 });

    res.render("confirm", { success: true });
  }
};
