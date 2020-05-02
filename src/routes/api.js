import { Router } from "express";
import { authenticateJWT } from "../middlewares/authenticateJwt";
import RankingController from "../controllers/RankingController";
import AuthController from "../controllers/AuthController";
import DonateController from "../controllers/DonateController";

const routes = Router();

routes.post("/login", AuthController.login);

routes.post("/checkLogin", AuthController.isLogged);

routes.get("/rankings/pk/:quantidade", RankingController.getRankingsPK);
routes.get("/rankings/pvp/:quantidade", RankingController.getRankingsPVP);

routes.get("/donate", authenticateJWT, DonateController.show);
routes.post("/donate", authenticateJWT, DonateController.store);

export default routes;
