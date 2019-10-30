-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 30 Octobre 2019 à 09:15
-- Version du serveur :  5.7.20-0ubuntu0.16.04.1
-- Version de PHP :  7.2.18-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Tindev`
--

-- --------------------------------------------------------

--
-- Structure de la table `MATCH`
--

CREATE TABLE `MATCH` (
  `id` int(10) NOT NULL,
  `userid1` varchar(42) NOT NULL,
  `statususerid1` varchar(42) NOT NULL,
  `userid2` varchar(42) NOT NULL,
  `statususerid2` varchar(42) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `MESSAGE`
--

CREATE TABLE `MESSAGE` (
  `id` int(10) NOT NULL,
  `content` varchar(42) DEFAULT NULL,
  `userID1` varchar(42) DEFAULT NULL,
  `userID2` varchar(42) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `TECH`
--

CREATE TABLE `TECH` (
  `id` int(10) NOT NULL,
  `name` varchar(42) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `USER`
--

CREATE TABLE `USER` (
  `id` int(10) NOT NULL,
  `firstName` varchar(42) DEFAULT NULL COMMENT 'user''s firsname',
  `lastName` varchar(42) DEFAULT NULL COMMENT 'user''s lastname',
  `token` varchar(42) DEFAULT NULL COMMENT 'user''s token',
  `pseudo` varchar(42) NOT NULL COMMENT 'user''s github nickname',
  `experience` varchar(42) DEFAULT NULL COMMENT 'user''s experience in development',
  `photo` varchar(42) DEFAULT NULL COMMENT 'user''s link to avatar picture',
  `bio` varchar(255) DEFAULT NULL COMMENT 'user''s default bio from github account ',
  `url` varchar(60) DEFAULT NULL COMMENT 'user''s different url he would like to show on the profile',
  `mail` varchar(42) DEFAULT NULL COMMENT 'user''s contact email address',
  `location` varchar(42) DEFAULT NULL COMMENT 'user''s location',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `USER`
--

INSERT INTO `USER` (`id`, `firstName`, `lastName`, `token`, `pseudo`, `experience`, `photo`, `bio`, `url`, `mail`, `location`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 17:03:17', '2019-10-29 17:03:17'),
(2, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 17:51:10', '2019-10-29 17:51:10'),
(3, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 18:52:16', '2019-10-29 18:52:16'),
(4, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 18:52:38', '2019-10-29 18:52:38'),
(5, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:10:58', '2019-10-29 19:10:58'),
(6, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:11:01', '2019-10-29 19:11:01'),
(7, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:11:10', '2019-10-29 19:11:10'),
(8, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:27:40', '2019-10-29 19:27:40'),
(9, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:28:02', '2019-10-29 19:28:02'),
(10, NULL, NULL, NULL, 'toto', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-29 19:28:30', '2019-10-29 19:28:30');

-- --------------------------------------------------------

--
-- Structure de la table `USER_TECH`
--

CREATE TABLE `USER_TECH` (
  `tech_name` varchar(42) NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `USER_WISHES`
--

CREATE TABLE `USER_WISHES` (
  `user_id` int(10) NOT NULL,
  `wish_name` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `WISH`
--

CREATE TABLE `WISH` (
  `id` int(10) NOT NULL,
  `name` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `MATCH`
--
ALTER TABLE `MATCH`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `MESSAGE`
--
ALTER TABLE `MESSAGE`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `TECH`
--
ALTER TABLE `TECH`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `USER_TECH`
--
ALTER TABLE `USER_TECH`
  ADD PRIMARY KEY (`tech_name`,`user_id`),
  ADD KEY `tech_name` (`tech_name`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `tech_name_2` (`tech_name`),
  ADD KEY `tech_name_3` (`tech_name`,`user_id`);

--
-- Index pour la table `USER_WISHES`
--
ALTER TABLE `USER_WISHES`
  ADD PRIMARY KEY (`user_id`,`wish_name`);

--
-- Index pour la table `WISH`
--
ALTER TABLE `WISH`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `MATCH`
--
ALTER TABLE `MATCH`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `MESSAGE`
--
ALTER TABLE `MESSAGE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `TECH`
--
ALTER TABLE `TECH`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `USER`
--
ALTER TABLE `USER`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `WISH`
--
ALTER TABLE `WISH`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
