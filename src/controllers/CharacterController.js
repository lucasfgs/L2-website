import model from "../models/game";

async function getOnlinePlayers() {
  return await model.characters.count({ where: { online: 1 } });
}

export { getOnlinePlayers };
