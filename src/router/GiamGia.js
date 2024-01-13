import express from "express";
import GiamGiaController from "../controller/GiamGiaController";
const router = express.Router();
export default function GiamGia(app) {
  router.post("/them", GiamGiaController.themGiamGia);
  router.get("/doc", GiamGiaController.docdulieu);
  return app.use("/giam-gia", router);
}
