CREATE DATABASE  IF NOT EXISTS `proyectointegrador` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `proyectointegrador`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comentario` varchar(500) NOT NULL,
  `usuario_id` int(10) unsigned DEFAULT NULL,
  `producto_id` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Obra maestra de Dostoievsky',1,1,'2024-04-16 13:28:10','2024-04-16 13:28:10',NULL),(2,'Me encanto, recomiendo este libro a todo el mundo',3,1,'2024-04-16 13:28:42','2024-04-16 13:28:42',NULL),(3,'Uno de los grandes autores de la literatura rusa',4,1,'2024-04-16 13:29:03','2024-04-16 13:29:03',NULL),(4,'Una obra clásica que todos deberían leer',2,2,'2024-04-16 13:31:33','2024-04-16 13:31:33',NULL),(5,'Me emocionó hasta las lágrimas',5,2,'2024-04-16 13:32:04','2024-04-16 13:32:04',NULL),(6,'Victor Hugo es simplemente brillante',4,2,'2024-04-16 13:32:31','2024-04-16 13:32:31',NULL),(7,'Una de las mejores obras de la literatura española',2,3,'2024-04-16 13:33:14','2024-04-16 13:33:14',NULL),(8,'Una lectura indispensable',3,3,'2024-04-16 13:33:53','2024-04-16 13:33:53',NULL),(9,'Cervantes nos regaló una obra maestra',5,3,'2024-04-16 13:34:15','2024-04-16 13:34:15',NULL),(10,'Jane Austen es una autora increíble',1,4,'2024-04-16 13:35:06','2024-04-16 13:35:06',NULL),(11,'Una novela clásica que nunca pasa de moda',5,4,'2024-04-16 13:35:24','2024-04-16 13:35:24',NULL),(12,'Tanto el libro como la pelicula son inolvidables',4,4,'2024-04-16 13:35:49','2024-04-16 13:35:49',NULL),(13,'Un libro que te hace reflexionar sobre la sociedad',1,5,'2024-04-16 13:36:38','2024-04-16 13:36:38',NULL),(14,'Un clasico imperdible',5,5,'2024-04-16 13:36:53','2024-04-16 13:36:53',NULL),(15,'Cada dia el mundo se parece mas a esta anti utopia',4,5,'2024-04-16 13:37:14','2024-04-16 13:37:14',NULL),(16,'Una obra maestra que encanta tanto a niños como a adultos',2,6,'2024-04-16 13:37:47','2024-04-16 13:37:47',NULL),(17,'Cada vez que leo El Principito, descubro algo nuevo',5,6,'2024-04-16 13:38:32','2024-04-16 13:38:32',NULL),(18,'Una historia simple pero profundamente conmovedora',3,6,'2024-04-16 13:38:51','2024-04-16 13:38:51',NULL),(19,'Me mantuvo en vilo de principio a fin',1,7,'2024-04-16 13:39:17','2024-04-16 13:39:17',NULL),(20,'Un viaje emocionante por las calles de Barcelona',2,7,'2024-04-16 13:39:36','2024-04-16 13:39:36',NULL),(21,'Una obra maestra de la literatura contemporánea',4,7,'2024-04-16 13:39:56','2024-04-16 13:39:56',NULL),(22,'Una saga que marcó mi infancia',1,8,'2024-04-16 13:40:39','2024-04-16 13:40:39',NULL),(23,'JK Rowling creó un mundo mágico fascinante',2,8,'2024-04-16 13:40:56','2024-04-16 13:40:56',NULL),(24,'Me encantaría vivir en Hogwarts',3,8,'2024-04-16 13:41:13','2024-04-16 13:41:13',NULL),(25,'Un libro que te hace reflexionar sobre tus sueños',3,9,'2024-04-16 13:41:43','2024-04-16 13:41:43',NULL),(26,'Paulo Coelho tiene una forma única de contar historias',2,9,'2024-04-16 13:41:59','2024-04-16 13:41:59',NULL),(27,'Una lectura que te llena de esperanza',4,9,'2024-04-16 13:42:28','2024-04-16 13:42:28',NULL),(28,'Una historia que te transporta a otro mundo',1,10,'2024-04-16 13:42:57','2024-04-16 13:42:57',NULL),(29,'CS Lewis creó un universo fascinante',5,10,'2024-04-16 13:43:15','2024-04-16 13:43:15',NULL),(30,'Cada libro es una aventura emocionante',3,10,'2024-04-16 13:43:33','2024-04-16 13:43:33',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) DEFAULT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'foto.png','Crimen y Castigo','El libro narra tres historias que están superpuestas y entrelazadas en varios puntos. La trama principal es la historia del asesinato cometido por Raskólnikov y su arrepentimiento. Como tramas secundarias, aparecen la historia de vida y dolor de la familia Marmeladov y la vida de Dunia, la hermana de Raskólnikov','2024-04-15 18:56:09','2024-04-15 18:56:09',NULL,NULL),(2,'foto2.png','Los Miserables','Una novela épica que sigue las vidas de varios personajes, especialmente el exconvicto Jean Valjean y el inspector de policía Javert, quienes se cruzan repetidamente en la Francia del siglo XIX.','2024-04-15 18:57:48','2024-04-15 18:57:48',NULL,NULL),(3,'foto3.png','Don Quijote de la Mancha','La obra narra las aventuras de un hidalgo enloquecido por la lectura de libros de caballerías, quien decide hacerse caballero andante y partir en busca de aventuras.','2024-04-15 18:58:40','2024-04-15 18:58:40',NULL,NULL),(4,'foto4.png','Orgullo y Prejuicio','Una historia de amor y prejuicios en la Inglaterra del siglo XIX, donde Elizabeth Bennet debe lidiar con sus propios prejuicios mientras navega por el mundo de los matrimonios arreglados.','2024-04-15 18:59:34','2024-04-15 18:59:34',NULL,NULL),(5,'foto5.png','1984','Una novela distópica que presenta un mundo bajo un régimen totalitario, donde la libertad individual está severamente restringida y la vigilancia es omnipresente.','2024-04-15 19:00:10','2024-04-15 19:00:10',NULL,NULL),(6,'foto6.png','El principito','Un cuento poético que narra la historia de un joven príncipe que viaja de planeta en planeta, conociendo a diversos personajes que representan diferentes aspectos de la vida adulta.','2024-04-15 19:01:09','2024-04-15 19:01:09',NULL,NULL),(7,'foto7.png','La sombra del viento','Una novela misteriosa que sigue la búsqueda de un joven llamado Daniel Sempere para descubrir la verdad detrás de un libro maldito llamado \'La Sombra del Viento\'.','2024-04-15 19:01:59','2024-04-15 19:01:59',NULL,NULL),(8,'foto8.png','Harry Potter y la piedra filosofal','El primer libro de la serie Harry Potter, que narra las aventuras del joven mago Harry Potter mientras descubre su verdadera identidad en el mundo mágico.','2024-04-15 19:02:43','2024-04-15 19:02:43',NULL,NULL),(9,'foto9.png','El alquimista','Una historia inspiradora sobre un joven pastor que emprende un viaje en busca de un tesoro y descubre el verdadero significado de la vida en el camino.','2024-04-15 19:05:01','2024-04-15 19:05:01',NULL,NULL),(10,'foto10.png','Las Crónicas de Narnia: El León, la Bruja y el Armario','El primer libro en la serie de fantasía Las Crónicas de Narnia, que sigue a cuatro niños mientras descubren un mundo mágico detrás de un armario.','2024-04-15 19:05:56','2024-04-15 19:05:56',NULL,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'juana@gmail.com','33456','2005-04-24',23456789,'juana.png','2024-04-15 18:50:24','2024-04-15 18:50:24',NULL),(2,'mer@gmail.com','45678','2004-12-30',35678123,'mer.png','2024-04-15 18:51:23','2024-04-15 18:51:23',NULL),(3,'may@gmail.com','5jdt8','2004-09-16',27349123,'may.png','2024-04-15 18:52:01','2024-04-15 18:52:01',NULL),(4,'marki@gmail.com','hfttk','2004-03-06',45678123,'marki.png','2024-04-15 18:52:36','2024-04-15 18:52:36',NULL),(5,'lila@gmail.com','46578','2020-05-20',67675123,'lila.png','2024-04-15 18:53:09','2024-04-15 18:53:09',NULL),(6,'lila@gmail.com','46578','2020-05-20',67675123,'lila.png','2024-04-15 18:53:22','2024-04-15 18:53:22',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-16 14:21:26
