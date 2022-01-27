-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Jan 2022 pada 10.21
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `merchant_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `quantity` varchar(30) NOT NULL,
  `price` double NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `quantity`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Simp Keqing', '100', 55000, '2022-01-19', '2022-01-26'),
(3, 'Amberfune', '5', 70000, '2022-01-19', '2022-01-19'),
(4, 'Ganyu Wangy', '5', 70000, '2022-01-26', '2022-01-26'),
(5, 'Primogems', '300', 79000, '2022-01-27', '2022-01-27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `refresh_token` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Cosette', 'cosette@gmail.com', '$2b$10$/Z8W35iYC9wpFPS3eZTdRufVzrZZjb8ed6yu/eGFrTK', '', '2022-01-26 08:04:07', '2022-01-26 08:04:07'),
(2, 'mavis', 'mavis@gmail.com', '$2b$10$LD7P0DowXsDPyUnGl2GOm.GV9NcA12xQUDMo6gvjhiB', '', '2022-01-26 08:34:58', '2022-01-26 08:34:58'),
(3, 'mavis', 'mavis@gmail.com', '$2b$10$E1F18aC3ZrU/wKSNPQ3pSeSnsp9kTiiWXPh3KXEZ0MI', '', '2022-01-26 08:40:47', '2022-01-26 08:40:47'),
(4, 'new', 'new@gmail.com', '$2b$10$t4uJAR4KpNNrYxqsOO5kb.U/Srhk0kyTItfjkUyVyxv', '', '2022-01-26 09:05:46', '2022-01-26 09:05:46');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
