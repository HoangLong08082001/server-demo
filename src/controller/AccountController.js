import bcrypt, { hash } from "bcrypt";
var nodemailer = require("nodemailer");
import pool from "../config/Config";
const salt = 10;
const RegisterAccount = (req, res) => {
  let username = req.body.username;
  let pass = req.body.password;
  pool.query(
    "SELECT * FROM account WHERE email = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length > 0) {
        return res.status(200).json({ message: "exists" });
      } else {
        bcrypt.hash(pass, salt, (err, hash) => {
          if (err) {
            console.log(err);
          }
          if (hash) {
            pool.query(
              "INSERT INTO account (email,pass,passDe) VALUES (?,?,?)",
              [username, hash, pass],
              (err, data) => {
                if (err) {
                  console.log(err);
                }
                if (data) {
                  return res.status(200).json({ message: "success" });
                }
              }
            );
          }
        });
      }
    }
  );
};

const SendEmail = (req, res) => {
  console.log(req.body.email);
  let email = req.body.email;
  pool.query("SELECT * FROM account WHERE email=?", [email], (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data && data.length > 0) {
      console.log(data[0]);
      var transposter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "longhoang882001@gmail.com",
          pass: "vxepsubdfijdyamr",
        },
      });
      var mailOptions = {
        from: "longhoang882001@gmail.com",
        to: email,
        subject: `CAP LAI PASSWORD`,
        text: `PASSWORD CUA BAN LA ${data[0].passDe}`,
      };
      transposter.sendMail(mailOptions, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log("Email was sended");
        }
      });
    }
  });
};
module.exports = { RegisterAccount, SendEmail };
