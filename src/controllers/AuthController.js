import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import model from "../models";
import passwordEncrypt from "../utils/passwordEncrypt";
import { verifyJWTToken } from "../utils/verifyJwt";

export default {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({ error: true, message: "Please insert a email or password" });
      return;
    }

    const encryptedPassword = passwordEncrypt(password);

    const user = await model.accounts.findOne({
      where: { [Op.and]: { email, password: encryptedPassword } },
    });
    if (user) {
      const { login, name } = user;
      const token = jwt.sign({ login, email, name }, process.env.JWT_SECRET);

      res.json({ token, user: { login, name, email } });
    } else {
      res.json({ error: true, message: "Invalid credentials" });
      return;
    }
  },

  async isLogged(req, res) {
    const { token } = req.body;

    verifyJWTToken(token)
      .then((decodedToken) => {
        res.json({ success: true });
      })
      .catch((err) => {
        res.json({ success: false });
      });
  },
};
