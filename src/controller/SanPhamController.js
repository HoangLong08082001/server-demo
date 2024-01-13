import pool from "../config/Config";
const themSanPham = (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let discount = req.body.discount;
  pool.query(
    "INSERT INTO sanpham (ten_sanpham, gia_sanpham, id_giamgia) VALUES (?,?,?) ",
    [name, price, discount],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        return res.status(200).json({ message: "ok" });
      }
    }
  );
};
const docdulieu = (req, res) => {
  pool.query(
    "SELECT * FROM sanpham INNER JOIN giamgiatudong ON sanpham.id_giamgia = giamgiatudong.id_giamgia",
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        return res.status(200).json({ message: "ok", data: result });
      }
    }
  );
};
module.exports = { themSanPham, docdulieu };
