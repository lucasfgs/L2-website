import model from "../models";
import { Op } from "sequelize";

export default {
  async getRankingsPK(req, res) {
    const ranking = await model.characters.findAll({
      attributes: ['char_name', 'pkkills'],
      order: [["title", "DESC"]],
      limit: parseInt(req.params.quantidade),
      where: { accesslevel: { [Op.or]: [0, 7] } }
    });
    res.send(ranking);
  },
  async getRankingsPVP(req, res) {
    const ranking = await model.characters.findAll({
      attributes: ['char_name', 'pvpkills'],
      order: [["title", "DESC"]],
      limit: parseInt(req.params.quantidade),
      where: { accesslevel: { [Op.or]: [0, 7] } }
    });
    res.send(ranking);
  }
}