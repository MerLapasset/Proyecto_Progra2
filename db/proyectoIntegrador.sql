-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-06-2024 a las 18:33:24
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--
CREATE DATABASE IF NOT EXISTS `proyectoIntegrador` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `proyectoIntegrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(9, 'Cervantes nos regaló una obra maestra', 5, 3, '2024-04-16 13:34:15', '2024-04-16 13:34:15', NULL),
(10, 'Jane Austen es una autora increíble', 1, 4, '2024-04-16 13:35:06', '2024-04-16 13:35:06', NULL),
(11, 'Una novela clásica que nunca pasa de moda', 5, 4, '2024-04-16 13:35:24', '2024-04-16 13:35:24', NULL),
(12, 'Tanto el libro como la pelicula son inolvidables', 4, 4, '2024-04-16 13:35:49', '2024-04-16 13:35:49', NULL),
(13, 'Un libro que te hace reflexionar sobre la sociedad', 1, 5, '2024-04-16 13:36:38', '2024-04-16 13:36:38', NULL),
(14, 'Un clasico imperdible', 5, 5, '2024-04-16 13:36:53', '2024-04-16 13:36:53', NULL),
(15, 'Cada dia el mundo se parece mas a esta anti utopia', 4, 5, '2024-04-16 13:37:14', '2024-04-16 13:37:14', NULL),
(16, 'Una obra maestra que encanta tanto a niños como a adultos', 2, 6, '2024-04-16 13:37:47', '2024-04-16 13:37:47', NULL),
(17, 'Cada vez que leo El Principito, descubro algo nuevo', 5, 6, '2024-04-16 13:38:32', '2024-04-16 13:38:32', NULL),
(18, 'Una historia simple pero profundamente conmovedora', 3, 6, '2024-04-16 13:38:51', '2024-04-16 13:38:51', NULL),
(19, 'Me mantuvo en vilo de principio a fin', 1, 7, '2024-04-16 13:39:17', '2024-04-16 13:39:17', NULL),
(20, 'Un viaje emocionante por las calles de Barcelona', 2, 7, '2024-04-16 13:39:36', '2024-04-16 13:39:36', NULL),
(21, 'Una obra maestra de la literatura contemporánea', 4, 7, '2024-04-16 13:39:56', '2024-04-16 13:39:56', NULL),
(22, 'Una saga que marcó mi infancia', 1, 8, '2024-04-16 13:40:39', '2024-04-16 13:40:39', NULL),
(23, 'JK Rowling creó un mundo mágico fascinante', 2, 8, '2024-04-16 13:40:56', '2024-04-16 13:40:56', NULL),
(24, 'Me encantaría vivir en Hogwarts', 3, 8, '2024-04-16 13:41:13', '2024-04-16 13:41:13', NULL),
(25, 'Un libro que te hace reflexionar sobre tus sueños', 3, 9, '2024-04-16 13:41:43', '2024-04-16 13:41:43', NULL),
(26, 'Paulo Coelho tiene una forma única de contar historias', 2, 9, '2024-04-16 13:41:59', '2024-04-16 13:41:59', NULL),
(27, 'Una lectura que te llena de esperanza', 4, 9, '2024-04-16 13:42:28', '2024-04-16 13:42:28', NULL),
(28, 'Una historia que te transporta a otro mundo', 1, 10, '2024-04-16 13:42:57', '2024-04-16 13:42:57', NULL),
(29, 'CS Lewis creó un universo fascinante', 5, 10, '2024-04-16 13:43:15', '2024-04-16 13:43:15', NULL),
(30, 'Cada libro es una aventura emocionante', 3, 10, '2024-04-16 13:43:33', '2024-04-16 13:43:33', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(1, 'foto.png', 'Crimen y Castigo', 'El libro narra tres historias que están superpuestas y entrelazadas en varios puntos. La trama principal es la historia del asesinato cometido por Raskólnikov y su arrepentimiento. Como tramas secundarias, aparecen la historia de vida y dolor de la familia Marmeladov y la vida de Dunia, la hermana de Raskólnikov', '2024-04-15 18:56:09', '2024-04-15 18:56:09', NULL, NULL),
(2, 'foto2.png', 'Los Miserables', 'Una novela épica que sigue las vidas de varios personajes, especialmente el exconvicto Jean Valjean y el inspector de policía Javert, quienes se cruzan repetidamente en la Francia del siglo XIX.', '2024-04-15 18:57:48', '2024-04-15 18:57:48', NULL, NULL),
(3, 'foto3.png', 'Don Quijote de la Mancha', 'La obra narra las aventuras de un hidalgo enloquecido por la lectura de libros de caballerías, quien decide hacerse caballero andante y partir en busca de aventuras.', '2024-04-15 18:58:40', '2024-04-15 18:58:40', NULL, NULL),
(4, 'foto4.png', 'Orgullo y Prejuicio', 'Una historia de amor y prejuicios en la Inglaterra del siglo XIX, donde Elizabeth Bennet debe lidiar con sus propios prejuicios mientras navega por el mundo de los matrimonios arreglados.', '2024-04-15 18:59:34', '2024-04-15 18:59:34', NULL, NULL),
(5, 'foto5.png', '1984', 'Una novela distópica que presenta un mundo bajo un régimen totalitario, donde la libertad individual está severamente restringida y la vigilancia es omnipresente.', '2024-04-15 19:00:10', '2024-04-15 19:00:10', NULL, NULL),
(6, 'foto6.png', 'El principito', 'Un cuento poético que narra la historia de un joven príncipe que viaja de planeta en planeta, conociendo a diversos personajes que representan diferentes aspectos de la vida adulta.', '2024-04-15 19:01:09', '2024-04-15 19:01:09', NULL, NULL),
(7, 'foto7.png', 'La sombra del viento', 'Una novela misteriosa que sigue la búsqueda de un joven llamado Daniel Sempere para descubrir la verdad detrás de un libro maldito llamado \'La Sombra del Viento\'.', '2024-04-15 19:01:59', '2024-04-15 19:01:59', NULL, NULL),
(8, 'foto8.png', 'Harry Potter y la piedra filosofal', 'El primer libro de la serie Harry Potter, que narra las aventuras del joven mago Harry Potter mientras descubre su verdadera identidad en el mundo mágico.', '2024-04-15 19:02:43', '2024-04-15 19:02:43', NULL, NULL),
(9, 'foto9.png', 'El alquimista', 'Una historia inspiradora sobre un joven pastor que emprende un viaje en busca de un tesoro y descubre el verdadero significado de la vida en el camino.', '2024-04-15 19:05:01', '2024-04-15 19:05:01', NULL, NULL),
(10, 'foto10.png', 'Las Crónicas de Narnia: El León, la Bruja y el Armario', 'El primer libro en la serie de fantasía Las Crónicas de Narnia, que sigue a cuatro niños mientras descubren un mundo mágico detrás de un armario.', '2024-04-15 19:05:56', '2024-04-15 19:05:56', NULL, NULL);

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'juana@gmail.com', '33456', '2005-04-24', 23456789, 'juana.png', '2024-04-15 18:50:24', '2024-04-15 18:50:24', NULL),
(2, 'mer@gmail.com', '45678', '2004-12-30', 35678123, 'mer.png', '2024-04-15 18:51:23', '2024-04-15 18:51:23', NULL),
(3, 'may@gmail.com', '5jdt8', '2004-09-16', 27349123, 'may.png', '2024-04-15 18:52:01', '2024-04-15 18:52:01', NULL),
(4, 'marki@gmail.com', 'hfttk', '2004-03-06', 45678123, 'marki.png', '2024-04-15 18:52:36', '2024-04-15 18:52:36', NULL),
(5, 'lila@gmail.com', '46578', '2020-05-20', 67675123, 'lila.png', '2024-04-15 18:53:09', '2024-04-15 18:53:09', NULL),
(6, 'lila@gmail.com', '46578', '2020-05-20', 67675123, 'lila.png', '2024-04-15 18:53:22', '2024-04-15 18:53:22', NULL);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
