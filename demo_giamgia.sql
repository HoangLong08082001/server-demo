-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th1 15, 2024 lúc 09:26 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `demo_giamgia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id_account` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `passDe` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id_account`, `email`, `pass`, `passDe`) VALUES
(3, 'longhoang882001@gmail.com', '$2b$10$oDZE1qH/j2TpCy0mj.GMq.hyU.6P7JxWv6vYkDekc0egIWMEI/bhe', 'long0808'),
(4, 'longhoang08082001@gmail.com', '$2b$10$.3S4uMMpdzt2hggXVMu4KOPKxGIiI.7mn5qamtcEt6jha2lyW0/my', 'long0808');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giamgiathem`
--

CREATE TABLE `giamgiathem` (
  `id_giamgia_them` int(11) NOT NULL,
  `noidung_giamgia_them` varchar(200) DEFAULT NULL,
  `ten_giamgia_them` varchar(200) DEFAULT NULL,
  `ngaybatdau` date DEFAULT NULL,
  `ngayketthuc` date DEFAULT NULL,
  `mucgiam_them` int(11) DEFAULT NULL,
  `id_giamgia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giamgiatudong`
--

CREATE TABLE `giamgiatudong` (
  `id_giamgia` int(11) NOT NULL,
  `ngaybatdau` date DEFAULT NULL,
  `ngayketthuc` date DEFAULT NULL,
  `ten_dotgiamgia` varchar(100) DEFAULT NULL,
  `noidung_giamgia` varchar(200) DEFAULT NULL,
  `muc_giamgia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giamgiatudong`
--

INSERT INTO `giamgiatudong` (`id_giamgia`, `ngaybatdau`, `ngayketthuc`, `ten_dotgiamgia`, `noidung_giamgia`, `muc_giamgia`) VALUES
(1, '2023-12-08', '2023-12-10', 'GIAM GIA CUOI NAM', 'DOT GIAM GIA THANG 10', 10),
(2, '2023-12-09', '2023-12-11', 'GIAM GIA THANG 12', 'CHUONG TRINH GIAM GIA THANG 12', 12),
(3, '2023-12-09', '2023-12-11', 'DOT GIAM GIA DAU NAM 2024', 'CHUONG TRINH GIAM GIA 2023', 25),
(4, '2023-12-09', '2023-12-21', 'DOT GIAM GIA DAU NAM 2024', 'CHUONG TRINH GIAM GIA 2023', 23),
(5, '2023-12-01', '2023-12-07', 'GIAM GIA THANG 11', 'CHUONG TRINH GIAM GIA', 12),
(6, '2023-12-09', '2023-12-10', 'GIAM GIA CUOI NAM 2023', 'CHUONG TRINH GIA GIA', 33);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `id_sanpham` int(11) NOT NULL,
  `ten_sanpham` varchar(100) DEFAULT NULL,
  `gia_sanpham` int(11) DEFAULT NULL,
  `id_giamgia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`id_sanpham`, `ten_sanpham`, `gia_sanpham`, `id_giamgia`) VALUES
(1, 'PC ASUS', 1000000, 4),
(2, 'PC DELL', 1000000, 1),
(3, 'PC ALLIENWARE', 1000000, 1),
(4, 'PC MACBOOK', 1000000, 5),
(5, 'PC ACER', 500000, 1),
(6, 'LAPTOP HP', 800000, 5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id_account`);

--
-- Chỉ mục cho bảng `giamgiathem`
--
ALTER TABLE `giamgiathem`
  ADD PRIMARY KEY (`id_giamgia_them`),
  ADD KEY `id_giamgia` (`id_giamgia`);

--
-- Chỉ mục cho bảng `giamgiatudong`
--
ALTER TABLE `giamgiatudong`
  ADD PRIMARY KEY (`id_giamgia`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id_sanpham`),
  ADD KEY `id_giamgia` (`id_giamgia`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id_account` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `giamgiathem`
--
ALTER TABLE `giamgiathem`
  MODIFY `id_giamgia_them` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `giamgiatudong`
--
ALTER TABLE `giamgiatudong`
  MODIFY `id_giamgia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id_sanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `giamgiathem`
--
ALTER TABLE `giamgiathem`
  ADD CONSTRAINT `giamgiathem_ibfk_1` FOREIGN KEY (`id_giamgia`) REFERENCES `giamgiatudong` (`id_giamgia`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_giamgia`) REFERENCES `giamgiatudong` (`id_giamgia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
