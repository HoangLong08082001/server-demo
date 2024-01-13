import express from "express";
import AccountController from "../controller/AccountController";
const router = express.Router();
export default function AccountRoute(app) {
  router.post("/register", AccountController.RegisterAccount);
  router.post("/send-email", AccountController.SendEmail);
  return app.use("/account", router);
}
