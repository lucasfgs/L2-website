import { Router } from "express";
import { check, validationResult, ValidationError } from "express-validator";
import { getOnlinePlayers } from "./controllers/CharacterController";
import AccountController from "./controllers/AccountController";
import { getGameserverStatus } from "./services/gameserver";

const routes = Router();

routes.get("/", async (req, res) => {
  const serverStatus = await getGameserverStatus();
  if (serverStatus === "Offline") {
    res.render("home", { playersOnline: 0, serverStatus });
  } else {
    const playersOnline = await getOnlinePlayers();

    res.render("home", { playersOnline, serverStatus });
  }
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
  AccountController.createAccount
);

// routes.get("/updater/Build/:file", (req, res) => {
//   const { file } = req.params;
//   res.download(`src/updater/Build/${file}`);
// });

// routes.get("/updater/News/:file", (req, res) => {
//   const { file } = req.params;
//   res.download(`src/updater/News/${file}`);
// });

export default routes;
