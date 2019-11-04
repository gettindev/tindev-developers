-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: Tindev
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_wishes`
--

DROP TABLE IF EXISTS `user_wishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_wishes` (
  `userId` int(10) NOT NULL,
  `wishId` int(10) NOT NULL,
  KEY `fk_user_wish` (`userId`),
  KEY `fk_wish_name` (`wishId`),
  CONSTRAINT `fk_user_wish` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_wish_name` FOREIGN KEY (`wishId`) REFERENCES `wishes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_wishes`
--

LOCK TABLES `user_wishes` WRITE;
/*!40000 ALTER TABLE `user_wishes` DISABLE KEYS */;
INSERT INTO `user_wishes` VALUES (2,1),(2,3),(2,5),(3,5),(3,7),(3,2),(3,3);
/*!40000 ALTER TABLE `user_wishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(42) DEFAULT NULL COMMENT 'user''s firsname',
  `lastName` varchar(42) DEFAULT NULL COMMENT 'user''s lastname',
  `token` varchar(42) DEFAULT NULL COMMENT 'user''s token',
  `pseudo` varchar(128) DEFAULT NULL,
  `experience` varchar(42) DEFAULT NULL COMMENT 'user''s experience in development',
  `photo` varchar(128) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL COMMENT 'user''s default bio from github account ',
  `url` varchar(60) DEFAULT NULL COMMENT 'user''s different url he would like to show on the profile',
  `mail` varchar(42) DEFAULT NULL COMMENT 'user''s contact email address',
  `location` varchar(42) DEFAULT NULL COMMENT 'user''s location',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Damien','Tailhades',NULL,'regulardesigner','1','https://avatars1.githubusercontent.com/u/1433968','I\'m a designer trying to become developer after 12 years designing website and mobile apps.',NULL,NULL,NULL,'2019-10-30 11:15:36','2019-10-30 22:21:04'),(3,'Gael','Guyon',NULL,'oldschoolstarsman','1','https://avatars3.githubusercontent.com/u/30653088','Studying web development with https://oclock.io #TeamQuantum #TeamUnivers',NULL,'gael.guyon@gmail.com',NULL,'2019-10-30 11:16:09','2019-10-30 22:25:11'),(5,'Jerem','Dumas',NULL,'Developer-Musclay','1','https://avatars1.githubusercontent.com/u/50885769','Eat code night and day',NULL,NULL,NULL,'2019-10-30 22:28:36','2019-10-30 22:28:36'),(6,'Florian','Merrien',NULL,'FlorianMrn','2','https://avatars2.githubusercontent.com/u/50869779','pas de bio...',NULL,NULL,NULL,'2019-10-30 22:34:34','2019-10-30 22:34:34'),(7,'Adam','Brodzinski',NULL,'AdamBrodzinski',NULL,'https://avatars3.githubusercontent.com/u/1445367','CTO @ Haven Connect, full stack developer',NULL,NULL,NULL,'2019-10-30 22:37:16','2019-10-30 22:37:16'),(8,'Ada Rose','Cannon',NULL,'AdaRoseCannon','3','https://avatars2.githubusercontent.com/u/4225330','Front End Web Developer & Developer Advocate at Samsung. Co-chair of the W3c Immersive Web working group.',NULL,NULL,NULL,'2019-10-31 08:18:41','2019-10-31 09:34:25'),(9,'Nassim','Ben Ghmiss',NULL,'FlyersWeb','4','https://avatars3.githubusercontent.com/u/12849837','Working everyday on opensource projects.',NULL,NULL,NULL,'2019-10-31 09:28:22','2019-10-31 09:30:13'),(10,'Vincent','Ollivier',NULL,'Vinc','4','https://avatars2.githubusercontent.com/u/305625','Remote web developer coding in ruby, javascript, and rust',NULL,NULL,NULL,'2019-10-31 09:29:21','2019-10-31 09:29:54'),(11,'Monica','Dinculescu',NULL,'notwaldorf','2','https://avatars1.githubusercontent.com/u/1369170','github.com/notwaldorf/ama',NULL,NULL,NULL,'2019-10-31 09:32:18','2019-10-31 09:32:18'),(12,'Mandy','Michael',NULL,'mandymichael','2','https://avatars3.githubusercontent.com/u/11938879','Lover of CSS and Batman',NULL,NULL,NULL,'2019-10-31 09:33:10','2019-10-31 09:33:10'),(13,'Omayeli','Arenyeka',NULL,'oa495','2','https://avatars0.githubusercontent.com/u/8635106','Call me Yeli. I define myself has a Creative coders, designers, artists, activists, and educators.',NULL,NULL,NULL,'2019-10-31 09:35:13','2019-10-31 09:35:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishes`
--

DROP TABLE IF EXISTS `wishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wishes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(42) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishes`
--

LOCK TABLES `wishes` WRITE;
/*!40000 ALTER TABLE `wishes` DISABLE KEYS */;
INSERT INTO `wishes` VALUES (1,'entraide'),(2,'discussion'),(3,'pizza'),(4,'amour'),(5,'stafferUnProjet'),(6,'meetUp'),(7,'job'),(8,'iHaveAnIdea'),(9,'whatever');
/*!40000 ALTER TABLE `wishes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-31 10:47:31
