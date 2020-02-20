import { Router } from "express";
import { getOnlinePlayers } from "./controllers/CharacterController";
import { getGameserverStatus } from "./services/gameserver";

const routes = Router();

routes.get("/", async (req, res) => {
  const playersOnline = await getOnlinePlayers();
  // const gameserver = getGameserverStatus();
  const serverStatus = "Online";

  res.render("home", { playersOnline, serverStatus });
});

routes.get("/register", async (req, res) => {
  res.render("register");
});

export default routes;
