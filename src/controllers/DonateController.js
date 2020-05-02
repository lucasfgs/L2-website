import model from "../models";

export default {
  async show(req, res) {
    const { login } = req.user;

    const donates = await model.donate.findAll({
      where: { user_login: login },
      order: [["created_at", "DESC"]],
      limit: 10,
    });
    if (donates.length > 0) {
      res.send(donates);
    } else {
      res.json({ error: true, message: "Nenhum donate realizado" });
    }
  },
  async store(req, res) {
    const {
      order_id,
      amount,
      coins,
      currency_code,
      status,
      payer_name,
      payer_email,
      payer_address,
      created_at,
    } = req.body;

    const { login } = req.user;

    const donate = await model.donate.create({
      order_id,
      amount,
      coins,
      currency_code,
      status,
      payer_name,
      payer_email,
      payer_address,
      user_login: login,
      created_at,
    });

    let account = await model.accounts.findOne({ where: { login } });
    let currentCoins = parseInt(account.wallet_amount) + parseInt(coins);
    account = await account.update({ wallet_amount: currentCoins });

    if (donate && account) {
      res.json({ success: true });
      return;
    }
  },
};
