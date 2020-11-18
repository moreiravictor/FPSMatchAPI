-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: fps_match
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kills`
--

DROP TABLE IF EXISTS `kills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kills` (
  `kill_id` int NOT NULL AUTO_INCREMENT,
  `kill_name` varchar(255) NOT NULL,
  `point_amount` int NOT NULL,
  PRIMARY KEY (`kill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kills`
--

LOCK TABLES `kills` WRITE;
/*!40000 ALTER TABLE `kills` DISABLE KEYS */;
INSERT INTO `kills` VALUES (1,'HEADSHOT',40),(2,'CHEST',30),(3,'LEGS',20),(4,'ARMS',10);
/*!40000 ALTER TABLE `kills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `match_id` int NOT NULL AUTO_INCREMENT,
  `match_date` datetime NOT NULL,
  `winner_team` int DEFAULT NULL,
  PRIMARY KEY (`match_id`),
  KEY `winner_team` (`winner_team`),
  CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`winner_team`) REFERENCES `teams` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,'2020-11-16 00:00:00',1);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int NOT NULL AUTO_INCREMENT,
  `player_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birth_date` datetime NOT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'redrest','redrest@gmail.com','2000-06-17 00:00:00'),(2,'joseph','joseph@gmail.com','1990-02-22 00:00:00'),(3,'josh','22@gmail.com','2020-03-03 00:00:00'),(4,'jub','ssss@gmail.com','2020-03-03 00:00:00');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_kills_matches`
--

DROP TABLE IF EXISTS `players_kills_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_kills_matches` (
  `player_kill_match_id` int NOT NULL AUTO_INCREMENT,
  `killer_id` int DEFAULT NULL,
  `killed_id` int DEFAULT NULL,
  `match_id` int DEFAULT NULL,
  `kill_id` int DEFAULT NULL,
  PRIMARY KEY (`player_kill_match_id`),
  KEY `killer_id` (`killer_id`),
  KEY `killed_id` (`killed_id`),
  KEY `match_id` (`match_id`),
  KEY `kill_id` (`kill_id`),
  CONSTRAINT `players_kills_matches_ibfk_1` FOREIGN KEY (`killer_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `players_kills_matches_ibfk_2` FOREIGN KEY (`killed_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `players_kills_matches_ibfk_3` FOREIGN KEY (`match_id`) REFERENCES `matches` (`match_id`),
  CONSTRAINT `players_kills_matches_ibfk_4` FOREIGN KEY (`kill_id`) REFERENCES `kills` (`kill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_kills_matches`
--

LOCK TABLES `players_kills_matches` WRITE;
/*!40000 ALTER TABLE `players_kills_matches` DISABLE KEYS */;
INSERT INTO `players_kills_matches` VALUES (1,1,2,1,1),(2,2,1,1,2),(3,1,2,1,2),(4,3,4,1,3),(5,4,1,1,3),(6,4,1,1,1);
/*!40000 ALTER TABLE `players_kills_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_teams_matches`
--

DROP TABLE IF EXISTS `players_teams_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_teams_matches` (
  `player_team_match_id` int NOT NULL AUTO_INCREMENT,
  `player_id` int DEFAULT NULL,
  `match_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  PRIMARY KEY (`player_team_match_id`),
  KEY `player_id` (`player_id`),
  KEY `match_id` (`match_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `players_teams_matches_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `players_teams_matches_ibfk_2` FOREIGN KEY (`match_id`) REFERENCES `matches` (`match_id`),
  CONSTRAINT `players_teams_matches_ibfk_3` FOREIGN KEY (`team_id`) REFERENCES `teams` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_teams_matches`
--

LOCK TABLES `players_teams_matches` WRITE;
/*!40000 ALTER TABLE `players_teams_matches` DISABLE KEYS */;
INSERT INTO `players_teams_matches` VALUES (1,1,1,1),(2,2,1,2),(3,3,1,1),(4,4,1,2);
/*!40000 ALTER TABLE `players_teams_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20201114143742-create-weapons copy.js'),('20201114143742-create-weapons.js'),('20201115171854-create-teams.js'),('20201115172119-create-players.js'),('20201115172324-create-kills.js'),('20201115173750-create-matches.js'),('20201115182127-create-players_teams_matches.js'),('20201115182520-create-players_kills_matches.js'),('20201116103937-edit-plaers-teams-matches-name.js'),('20201116153258-edit-players-kills-matches-name.js'),('20201116180445-adding-points-kills.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(255) NOT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Counter Terrorists'),(2,'Terrorists');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapons`
--

DROP TABLE IF EXISTS `weapons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weapons` (
  `weapon_id` int NOT NULL AUTO_INCREMENT,
  `weapon_name` varchar(255) NOT NULL,
  `damage` int NOT NULL,
  `recoil` int NOT NULL,
  `magazine` int NOT NULL,
  `bullets_magazine` int NOT NULL,
  PRIMARY KEY (`weapon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapons`
--

LOCK TABLES `weapons` WRITE;
/*!40000 ALTER TABLE `weapons` DISABLE KEYS */;
INSERT INTO `weapons` VALUES (1,'M16',25,12,4,30),(2,'AK-47',25,12,4,30),(3,'AK-47',25,12,4,30);
/*!40000 ALTER TABLE `weapons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-17 20:52:16
