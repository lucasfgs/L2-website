import model from "../models";

async function getOnlinePlayers() {
  return await model.characters.count({ where: { online: 1 } });
}

export { getOnlinePlayers };
