const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createConnection({
  host: "bcndwcxfcewfwt2n5nhq-mysql.services.clever-cloud.com",
  user: "uaiv8dfxqgm5y67j",
  password: "cBNwOxEqNnLD5jp26Bep",
  database: "bcndwcxfcewfwt2n5nhq",
});
pool.connect((err) => {
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
