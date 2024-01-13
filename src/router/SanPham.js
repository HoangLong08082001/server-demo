import express from "express";
const router = express.Router();
import SanPhamController from "../controller/SanPhamController";
export default function SanPham(app) {
  router.post("/them", SanPhamController.themSanPham);
  router.get("/doc", SanPhamController.docdulieu);
  return app.use("/san-pham", router);
}
