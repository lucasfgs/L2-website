import model from "../models/login";
import passwordEncrypt from "../utils/passwordEncrypt";
import { sendMail } from "../services/mail";
import { registerAccount } from "../mailTemplates";

async function createAccount(name, email, login, password) {
  const verifyEmail = await model.accounts.findOne({ email });
  if (verifyEmail) return null;

  const account = await model.accounts.create({
    name,
    email,
    login,
    password: passwordEncrypt(password)
  });

  if (account) {
    sendMail(email, "Account creation", registerAccount(name, login, password));

    return account;
  }
}

export { createAccount };
