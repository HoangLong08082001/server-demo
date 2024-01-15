const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});
pool.getConnection((err) => {
  if (err) {
    console.log("Connect Fails");
    console.log(process.env.DATABASE);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
  } else {
    console.log("Connect Success");

    console.log(process.env.DATABASE);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
    console.log(process.env.PORT_VIEWS);
  }
});
module.exports = pool;
