import model from "../models";

export default {
  async show(req, res) {
    const { login } = req.user;

    const donates = await model.donate.findAll({
      where: { user_login: login },
    });

    res.send(donates);
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

    const account = await model.accounts.update(
      { wallet_amount: coins },
      {
        where: {
          login,
        },
      }
    );

    if (donate && account) {
      res.json({ success: true });
      return;
    }
  },
};
