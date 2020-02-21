import model from "../models/login";
import passwordEncrypt from "../utils/passwordEncrypt";

async function createAccount(name, email, login, password) {
  const account = await model.accounts.create({
    name,
    email,
    login,
    password: passwordEncrypt(password)
  });

  return account;
}

export { createAccount };
