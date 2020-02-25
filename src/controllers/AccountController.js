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
      sendMail(
        email,
        "Account creation",
        registerAccount(name, login, password)
      );
      res.render("register", {
        success: true
      });
      return;
    }
  }
};
