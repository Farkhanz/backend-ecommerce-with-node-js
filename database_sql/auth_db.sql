-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Jan 2022 pada 10.20
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
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `phone_number` varchar(14) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`, `phone_number`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Mavis.eu', 'maviseus@gmail.com', '$2b$10$BL8VThZmzOhqvkjTuxpSbujuuOfF4XfA9loKMUaoZQI4OnR5h3Fva', '', '', NULL, '2022-01-19 12:11:36', '2022-01-19 12:11:36'),
(2, 'Cosette', 'cosette@gmail.com', '$2b$10$Dn7p6UR618dVUTM1H6H57eABRm2JlRT.UqSc14/g7JmDMzoBNwKXm', '', '', NULL, '2022-01-22 03:41:16', '2022-01-22 03:41:16'),
(3, 'Cosette', 'cosette@gmail.com', '$2b$10$sdtb240.JxIGwBFzYzUhJ.4N9xJOJz9C.BteThFiAqmaoaCAEsRbi', '', '', NULL, '2022-01-26 08:37:55', '2022-01-26 08:37:55'),
(4, 'new', 'new@gmail.com', '$2b$10$NZ6.nxjosOEoRMvEeTdew.xBgNDZnlHhCthsjGLm0TRtz1Fde7xJ6', '', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiJuZXciLCJlbWFpbCI6Im5ld0BnbWFpbC5jb20iLCJpYXQiOjE2NDMxOTAxNzgsImV4cCI6MTY0MzI3NjU3OH0.TGIu-NtpQ_aIg_RfoOJJCATM9Qz0cY0q1fe7quVUhYc', '2022-01-26 09:09:10', '2022-01-26 09:42:58'),
(5, 'new', 'new@gmail.com', '$2b$10$NxGWwx0rJ1xvmVh3ELfaheWBtwQ/562nRKMq55XzojNtaCBF0N.2K', '', '', NULL, '2022-01-26 09:29:08', '2022-01-26 09:29:08'),
(7, 'Keqing', 'kequeen@gmail.com', '$2b$10$hosu6ODJ.iT88dJZA3om3eIKHodqQN5lNMxiAaiIc2Q2tEsOA7GJO', 'Liyue harbour', '09921837192', NULL, '2022-01-26 09:56:53', '2022-01-26 09:56:53');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
