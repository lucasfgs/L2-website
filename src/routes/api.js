import { Router } from "express";
import AuthController from "../controllers/AuthController";

const routes = Router();

routes.post("/login", AuthController.login);

routes.post("/checkLogin", AuthController.isLogged);

export default routes;
