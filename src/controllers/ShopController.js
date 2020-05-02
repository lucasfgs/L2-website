import model from "../models";

export default {
  async show(req, res) {
    const shopItems = await model.shop.findAll();
    res.send(shopItems);
  },
  async purchase(req, res) {
    const { login } = req.user;

    const { item_id, price, charId } = req.body;

    let account = await model.accounts.findOne({ where: { login } });
    if (account.wallet_amount >= price && charId) {
      let currentCoins = parseInt(account.wallet_amount) - parseInt(price);
      account = await account.update({ wallet_amount: currentCoins });

      let verifyItem = await model.items.findOne({
        where: { object_id: parseInt(charId) + parseInt(item_id) },
      });
      if (verifyItem) {
        let currentItemCount = parseInt(verifyItem.count) + parseInt(price);
        verifyItem = await verifyItem.update({ count: currentItemCount });
        res.json({ error: false, verifyItem });
        return;
      } else {
        const itemOnAccount = await model.items.create({
          owner_id: parseInt(charId),
          object_id: parseInt(charId) + parseInt(item_id),
          item_id,
          count: price,
          loc: "WAREHOUSE",
          mana_left: -1,
          time: -1,
        });
        res.json({ error: false, itemOnAccount });
        return;
      }
    } else {
      res.json({ error: true, message: "Dinheiro insuficiente!" });
      return;
    }
  },
};
