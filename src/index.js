import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import CheckoutRoute from "../src/router/CheckoutRoute";
import cors from "cors";
import pool from "./config/Config.js";
import GiamGia from "./router/GiamGia.js";
import SanPham from "./router/SanPham.js";
import AccountRoute from "./router/AccountRoute.js";
const app = express();
const port = 3300;
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(process.env.PORT_VIEWS);

app.use(
  cors({
    origin: [process.env.PORT_VIEWS || "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, POST, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-requested-with,content-type, Authorization"
  );
  res.setHeader("Cache-Control", "no-cache");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
CheckoutRoute(app);
GiamGia(app);
SanPham(app);
AccountRoute(app);
app.listen(port, () => {
  console.log("website is running", port);
});
