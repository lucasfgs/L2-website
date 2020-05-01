import { Router } from "express";
import RankingController from "../controllers/RankingController";
import AuthController from "../controllers/AuthController";

const routes = Router();

routes.post("/login", AuthController.login);

routes.post("/checkLogin", AuthController.isLogged);

routes.get("/rankings/pk/:quantidade", RankingController.getRankingsPK)
routes.get("/rankings/pvp/:quantidade", RankingController.getRankingsPVP)

export default routes;
