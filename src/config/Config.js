import mysql from "mysql";
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  database: process.env.DATABASE || "demo_giamgia",
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3306,
  user: process.env.USER || "root",
  password: process.env.PASS || "",
  connectionLimit: process.env.LIMIT || 10,
});
pool.getConnection((err) => {
  if (err) {
    console.log("Connect Fails");
  } else {
    console.log("Connect Success");

    console.log(process.env.DATABASE);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
  }
});
module.exports = pool;
