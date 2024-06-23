-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2024 a las 17:30:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectointegrador`
--
CREATE DATABASE IF NOT EXISTS `proyectointegrador` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectointegrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`, `usuario_id`, `producto_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Obra maestra de Dostoievsky', 1, 1, '2024-04-16 13:28:10', '2024-04-16 13:28:10', NULL),
(2, 'Me encanto, recomiendo este libro a todo el mundo', 3, 1, '2024-04-16 13:28:42', '2024-04-16 13:28:42', NULL),
(3, 'Uno de los grandes autores de la literatura rusa', 4, 1, '2024-04-16 13:29:03', '2024-04-16 13:29:03', NULL),
(4, 'Una obra clásica que todos deberían leer', 2, 2, '2024-04-16 13:31:33', '2024-04-16 13:31:33', NULL),
(5, 'Me emocionó hasta las lágrimas', 5, 2, '2024-04-16 13:32:04', '2024-04-16 13:32:04', NULL),
(6, 'Victor Hugo es simplemente brillante', 4, 2, '2024-04-16 13:32:31', '2024-04-16 13:32:31', NULL),
(7, 'Una de las mejores obras de la literatura española', 2, 3, '2024-04-16 13:33:14', '2024-04-16 13:33:14', NULL),
(8, 'Una lectura indispensable', 3, 3, '2024-04-16 13:33:53', '2024-04-16 13:33:53', NULL),
(9, 'Cervantes nos regaló una obra maestra', 6, 3, '2024-04-16 13:34:15', '2024-04-16 13:34:15', NULL),
(10, 'Jane Austen es una autora increíble', 1, 4, '2024-04-16 13:35:06', '2024-04-16 13:35:06', NULL),
(11, 'Una novela clásica que nunca pasa de moda', 5, 4, '2024-04-16 13:35:24', '2024-04-16 13:35:24', NULL),
(12, 'Tanto el libro como la pelicula son inolvidables', 6, 4, '2024-04-16 13:35:49', '2024-04-16 13:35:49', NULL),
(13, 'Un libro que te hace reflexionar sobre la sociedad', 5, 5, '2024-04-16 13:36:38', '2024-04-16 13:36:38', NULL),
(14, 'Un clasico imperdible', 2, 5, '2024-04-16 13:36:53', '2024-04-16 13:36:53', NULL),
(15, 'Cada dia el mundo se parece mas a esta anti utopia', 1, 5, '2024-04-16 13:37:14', '2024-04-16 13:37:14', NULL),
(16, 'Una obra maestra que encanta tanto a niños como a adultos', 5, 6, '2024-04-16 13:37:47', '2024-04-16 13:37:47', NULL),
(17, 'Cada vez que leo El Principito, descubro algo nuevo', 4, 6, '2024-04-16 13:38:32', '2024-04-16 13:38:32', NULL),
(18, 'Una historia simple pero profundamente conmovedora', 6, 6, '2024-04-16 13:38:51', '2024-04-16 13:38:51', NULL),
(19, 'Me mantuvo en vilo de principio a fin', 3, 7, '2024-04-16 13:39:17', '2024-04-16 13:39:17', NULL),
(20, 'Un viaje emocionante por las calles de Barcelona', 2, 7, '2024-04-16 13:39:36', '2024-04-16 13:39:36', NULL),
(21, 'Una obra maestra de la literatura contemporánea', 4, 7, '2024-04-16 13:39:56', '2024-04-16 13:39:56', NULL),
(22, 'Una saga que marcó mi infancia', 1, 8, '2024-04-16 13:40:39', '2024-04-16 13:40:39', NULL),
(23, 'JK Rowling creó un mundo mágico fascinante', 2, 8, '2024-04-16 13:40:56', '2024-04-16 13:40:56', NULL),
(24, 'Me encantaría vivir en Hogwarts', 6, 8, '2024-04-16 13:41:13', '2024-04-16 13:41:13', NULL),
(25, 'Un libro que te hace reflexionar sobre tus sueños', 3, 9, '2024-04-16 13:41:43', '2024-04-16 13:41:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(1, 'crimenycastigo.png', 'Crimen y Castigo', 'El libro narra tres historias que están superpuestas y entrelazadas en varios puntos. La trama principal es la historia del asesinato cometido por Raskólnikov y su arrepentimiento. Como tramas secundarias, aparecen la historia de vida y dolor de la familia Marmeladov y la vida de Dunia, la hermana de Raskólnikov', '2024-04-15 18:56:09', '2024-04-15 18:56:09', NULL, 1),
(2, 'losMiserables.png', 'Los Miserables', 'Una novela épica que sigue las vidas de varios personajes, especialmente el exconvicto Jean Valjean y el inspector de policía Javert, quienes se cruzan repetidamente en la Francia del siglo XIX.', '2024-04-15 18:57:48', '2024-04-15 18:57:48', NULL, 4),
(3, 'quijote.png', 'Don Quijote de la Mancha', 'La obra narra las aventuras de un hidalgo enloquecido por la lectura de libros de caballerías, quien decide hacerse caballero andante y partir en busca de aventuras.', '2024-04-15 18:58:40', '2024-04-15 18:58:40', NULL, 2),
(4, 'orgulloyprej.png', 'Orgullo y Prejuicio', 'Una historia de amor y prejuicios en la Inglaterra del siglo XIX, donde Elizabeth Bennet debe lidiar con sus propios prejuicios mientras navega por el mundo de los matrimonios arreglados.', '2024-04-15 18:59:34', '2024-04-15 18:59:34', NULL, 3),
(5, '1984.png', '1984', 'Una novela distópica que presenta un mundo bajo un régimen totalitario, donde la libertad individual está severamente restringida y la vigilancia es omnipresente.', '2024-04-15 19:00:10', '2024-04-15 19:00:10', NULL, 4),
(6, 'elPrincipito.png', 'El principito', 'Un cuento poético que narra la historia de un joven príncipe que viaja de planeta en planeta, conociendo a diversos personajes que representan diferentes aspectos de la vida adulta.', '2024-04-15 19:01:09', '2024-04-15 19:01:09', NULL, 6),
(7, 'lasombraDelViento.png', 'La sombra del viento', 'Una novela misteriosa que sigue la búsqueda de un joven llamado Daniel Sempere para descubrir la verdad detrás de un libro maldito llamado \'La Sombra del Viento\'.', '2024-04-15 19:01:59', '2024-04-15 19:01:59', NULL, 3),
(8, 'harryPotter.png', 'Harry Potter y la piedra filosofal', 'El primer libro de la serie Harry Potter, que narra las aventuras del joven mago Harry Potter mientras descubre su verdadera identidad en el mundo mágico.', '2024-04-15 19:02:43', '2024-04-15 19:02:43', NULL, 4),
(9, 'elalquimista.png', 'El alquimista', 'Una historia inspiradora sobre un joven pastor que emprende un viaje en busca de un tesoro y descubre el verdadero significado de la vida en el camino.', '2024-04-15 19:05:01', '2024-04-15 19:05:01', NULL, 5),
(10, 'narnia.png', 'Las Crónicas de Narnia: El León, la Bruja y el Armario', 'El primer libro en la serie de fantasía Las Crónicas de Narnia, que sigue a cuatro niños mientras descubren un mundo mágico detrás de un armario.', '2024-04-15 19:05:56', '2024-04-15 19:05:56', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`, `name`) VALUES
(1, 'juana@gmail.com', '$2a$10$DWHaoafNsta113.vL6Kt8OCRuK5wxkKMJgRjt1C16VHJGZ77jv0Be', '2021-01-01', 12345678, 'image.png', '2024-06-23 15:11:50', '2024-06-23 15:11:50', NULL, 'Juana'),
(2, 'mer@gmail.com', '$2a$10$vslhCM6aDMxf4d3xu/lsvuYKjyXDrwYCpvYT/tmFNhUseidDq5MrC', '1995-05-15', 17555073, 'mer.png', '2024-06-23 15:14:15', '2024-06-23 15:14:15', NULL, 'Mer'),
(3, 'marki@gmail.com', '$2a$10$cDYTakxoqNRyQWE/5iwCL.vob/0Ee7EqwDiYu8B/Ls9PuUyy.zeuO', '2004-08-08', 0, 'image.png', '2024-06-23 15:15:45', '2024-06-23 15:15:45', NULL, 'Marki'),
(4, 'lila@gmail.com', '$2a$10$fCfW84VU/FBjoAAs2Vjs1uZYyH19Ss6Vx2Pj.VYGtq1vHkKDpX6/u', '2009-09-09', 466156864, 'lila.png', '2024-06-23 15:19:43', '2024-06-23 15:19:43', NULL, 'Lila'),
(5, 'lean@gmail.com', '$2a$10$Ua89nsh.IvvijmnPIQVZgedPIONOVXMFnLRtrfiqhA2xpUjZXiOM.', '1990-07-07', 35354892, 'image.png', '2024-06-23 15:20:45', '2024-06-23 15:20:45', NULL, 'Lean'),
(6, 'piero@gmail.com', '$2a$10$U6cHWQ7VmlBjRT9ZULOWu.zUG8qcflkqGD5D72C73NLvIRFYqcxkG', '1993-02-05', 64356133, 'foto.png', '2024-06-23 15:21:53', '2024-06-23 15:21:53', NULL, 'Piero'),
(7, 'maiadolensky@gmail.com', '$2a$10$GxqmivZDHbWKyyjTFalk0uGe20l2hoFs7FIa4WHLBOSkxr8e8y6QG', '2004-09-16', 45768888, 'may.jpg', '2024-06-23 15:23:29', '2024-06-23 15:23:29', NULL, 'May');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
