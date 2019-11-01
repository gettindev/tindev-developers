-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 30 Octobre 2019 à 13:34
-- Version du serveur :  5.7.27-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Structure de la table `USER`
--
CREATE TABLE `users` (
  `id` int(10) NOT NULL PRIMARY KEY,
  `firstName` varchar(255) DEFAULT NULL COMMENT 'user''s firsname',
  `lastName` varchar(255) DEFAULT NULL COMMENT 'user''s lastname',
  `token` varchar(255) DEFAULT NULL COMMENT 'user''s token',
  `pseudo` varchar(255) NOT NULL COMMENT 'user''s github nickname',
  `experience` varchar(255) DEFAULT NULL COMMENT 'user''s experience in development',
  `photo` varchar(255) DEFAULT NULL COMMENT 'user''s link to avatar picture',
  `bio` varchar(255) DEFAULT NULL COMMENT 'user''s default bio from github account ',
  `url` varchar(255) DEFAULT NULL COMMENT 'user''s different url he would like to show on the profile',
  `mail` varchar(255) DEFAULT NULL COMMENT 'user''s contact email address',
  `location` varchar(255) DEFAULT NULL COMMENT 'user''s location',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Structure de la table `user_wishes`
--
CREATE TABLE `user_wishes` (
  `userId` int(10) NOT NULL,
  `wishId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour la table `user_wishes`
--
ALTER TABLE `user_wishes`
  ADD KEY `fk_user_wish` (`userId`),
  ADD KEY `fk_wish_name` (`wishId`);

--
-- Structure de la table `wishes`
--
CREATE TABLE `wishes` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Structure de la table `user_techs`
--
CREATE TABLE `user_techs` (
  `userId` int(10) NOT NULL,
  `techId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour la table `user_wishes`
--
ALTER TABLE `user_techs`
  ADD KEY `fk_user_tech` (`userId`),
  ADD KEY `fk_tech_name` (`techId`);

--
-- Structure de la table `techs`
--
CREATE TABLE `techs` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Structure de la table `matchings`
--
CREATE TABLE `matchings` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `currentUserId` int(10) NOT NULL,
  `currentUserStatus` varchar(42) NOT NULL,
  `swipedUserId` int(10) NOT NULL,
  `swipedUserStatus` varchar(42) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour la table `matchings`
--
ALTER TABLE `matchings`
  ADD KEY `fk_user_matching` (`currentUserId`),
  ADD KEY `fk_swiped_matching` (`swipedUserId`);

--
-- Contraintes pour la table `matchings`
--
ALTER TABLE `matchings`
  ADD CONSTRAINT `fk_user_matching` FOREIGN KEY (`currentUserId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_swiped_matching` FOREIGN KEY (`swipedUserId`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `user_wishes`
--
ALTER TABLE `user_wishes`
  ADD CONSTRAINT `fk_user_wish` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_wish_name` FOREIGN KEY (`wishId`) REFERENCES `wishes` (`id`);

--
-- Contraintes pour la table `user_techs`
--
ALTER TABLE `user_techs`
  ADD CONSTRAINT `fk_user_tech` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_tech_name` FOREIGN KEY (`techId`) REFERENCES `techs` (`id`);

-- --------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
