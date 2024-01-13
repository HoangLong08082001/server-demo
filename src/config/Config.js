import mysql from "mysql";

const pool = mysql.createPool({
  database: "demo_giamgia",
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  connectionLimit: 10,
});
pool.getConnection((err) => {
  if (err) {
    console.log("Connect Fails");
  } else {
    console.log("Connect Success");
  }
});
module.exports = pool;
