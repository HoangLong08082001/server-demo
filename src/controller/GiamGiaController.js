import pool from "../config/Config.js";

const themGiamGia = (req, res) => {
  let name = req.body.name;
  let content = req.body.content;
  let dateStart = req.body.dateStart;
  let dateEnd = req.body.dateEnd;
  let percent = req.body.percent;
  console.log(name + content + dateStart + dateEnd + percent);
  pool.query(
    "INSERT INTO `giamgiatudong`(`ngaybatdau`, `ngayketthuc`, `ten_dotgiamgia`, `noidung_giamgia`, `muc_giamgia`) VALUES (?,?,?,?,?)",
    [dateStart, dateEnd, name, content, percent],
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
  pool.query("SELECT * FROM giamgiatudong", [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "ok", data: result });
    }
  });
};
module.exports = { themGiamGia, docdulieu };
