import { Router } from "express";
import { check, validationResult, ValidationError } from "express-validator";
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

routes.post(
  "/register",
  [
    check("name")
      .notEmpty()
      .withMessage("Name cannot be empty"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must contain at least 6 characters"),
    check("email")
      .isEmail()
      .withMessage("Invalid e-mail"),
    check("login")
      .isLength({ min: 5 })
      .withMessage("Login must contain at least 5 characters"),
    check("terms")
      .exists()
      .withMessage("Please confirm our terms & conditions")
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (result.errors) {
      const errors = result.errors;

      if (!result.isEmpty()) {
        //response validate data to register.ejs
        res.render("register", {
          errors
        });
      }
    } else {
      res.render("register", {
        success: true
      });
    }
  }
);

export default routes;
