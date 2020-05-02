import { Router } from "express";
import { authenticateJWT } from "../middlewares/authenticateJwt";
import RankingController from "../controllers/RankingController";
import AuthController from "../controllers/AuthController";
import DonateController from "../controllers/DonateController";
import AccountController from "../controllers/AccountController";
import ShopController from "../controllers/ShopController";

const routes = Router();

routes.post("/login", AuthController.login);
routes.post("/checkLogin", AuthController.isLogged);

routes.get("/account/coins", authenticateJWT, AccountController.getCoins);
routes.get(
  "/account/characters",
  authenticateJWT,
  AccountController.getCharacters
);

routes.get("/rankings/pk/:quantidade", RankingController.getRankingsPK);
routes.get("/rankings/pvp/:quantidade", RankingController.getRankingsPVP);

routes.get("/shop", authenticateJWT, ShopController.show);
routes.post("/shop/purchase", authenticateJWT, ShopController.purchase);

routes.get("/donate", authenticateJWT, DonateController.show);
routes.post("/donate", authenticateJWT, DonateController.store);

export default routes;
