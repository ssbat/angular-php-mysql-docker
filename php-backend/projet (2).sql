-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2023 at 08:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `email`, `password`) VALUES
(1, 'saad', 'saad_sbat@hotmail.com', 'aaaaaa'),
(5, 'Bahaa', 'bahaa@utbm.fr', 'bbbbbb');

-- --------------------------------------------------------

--
-- Table structure for table `laptops`
--

CREATE TABLE `laptops` (
  `id` int(11) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `screen` int(11) NOT NULL,
  `processor` varchar(100) NOT NULL,
  `ram` int(11) NOT NULL,
  `gpu` varchar(100) NOT NULL,
  `storage` int(11) NOT NULL,
  `photo` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `laptops`
--

INSERT INTO `laptops` (`id`, `brand`, `price`, `screen`, `processor`, `ram`, `gpu`, `storage`, `photo`) VALUES
(4, 'Acer Predator', '1200', 15, 'Intel I7', 16, 'NVIDIA GeForce RTX2060', 520, 'laptop3.jpg'),
(116, 'ASUS ProArt Studiobook Pro', '3999', 15, 'Intel Core I7', 32, 'GPU NVIDIA RTX™ 3000', 800, 'as.png'),
(117, 'ASUS Zenbook 14 Flip', '1299', 13, 'Intel Core I7', 16, 'Intel® Iris® Xe', 520, 'ws.png'),
(118, 'Acer Chromebook Spin 514', '499', 13, 'Intel Core I3', 8, 'AMD Radeon™ Graphics', 240, 'as.webp'),
(119, 'Acer Aspire 5', '799', 15, 'Intel Core I5', 8, 'Intel® Iris® Xe Graphics ', 512, 'ase.webp'),
(120, 'HP OMEN 16', '1299', 15, 'Intel Core I7', 16, 'Intel® Iris® Xe', 520, 'c08524120.png'),
(121, 'HP ROG Zephyrus G14', '1999', 15, 'Intel Core I7', 16, 'NVIDIA® GeForce RTX™ 4090', 520, 'download-laptop-notebook-png-image-png-image-pngimg-2.png'),
(122, 'MSI Katana 17', '1379', 17, 'Intel Core I5', 16, 'NVIDIA RTX 4050', 512, 'gaming1.jpg'),
(123, 'Lenovo IdeaPad Gaming 3', '849', 15, 'Intel Core I5', 16, 'NVIDIA RTX 3060', 512, 'gaming2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sequence_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`time`, `sequence_id`, `product_id`, `client_id`) VALUES
('2023-06-19 18:15:28', 7, 116, 1),
('2023-06-19 18:15:28', 8, 117, 1),
('2023-06-19 18:15:28', 9, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(20) NOT NULL,
  `First_Name` varchar(88) NOT NULL,
  `Last_Name` varchar(88) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PASSWORD` varchar(300) NOT NULL,
  `profile` varchar(100) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Specialite` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `First_Name`, `Last_Name`, `Email`, `PASSWORD`, `profile`, `Gender`, `Specialite`) VALUES
(56, 'Saad', 'Sbat', 'saad_sbat@hotmail.com', 'aaaaaa', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptops`
--
ALTER TABLE `laptops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`sequence_id`),
  ADD KEY `prod` (`product_id`),
  ADD KEY `cli` (`client_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `laptops`
--
ALTER TABLE `laptops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `sequence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `cli` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prod` FOREIGN KEY (`product_id`) REFERENCES `laptops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
