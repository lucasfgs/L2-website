import model from "../models";

async function getOnlinePlayers() {
  let characters = await model.characters.count({ where: { online: 1 } });
  console.log(characters);
}

export { getOnlinePlayers };
