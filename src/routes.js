import { Router } from "express";
import { getOnlinePlayers } from "./controllers/CharacterController";

const routes = Router();

routes.get("/", (req, res) => {
  getOnlinePlayers();
  res.render("home");
});

export default routes;
