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
-- Base de données :  `tindev`
--

-- --------------------------------------------------------

--
-- Structure de la table `MATCH`
--

CREATE TABLE `MATCH` (
  `id` int(10) NOT NULL,
  `userid1` int(10) NOT NULL,
  `statususerid1` varchar(42) NOT NULL,
  `userid2` int(10) NOT NULL,
  `statususerid2` varchar(42) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `MESSAGE`
--

CREATE TABLE `MESSAGE` (
  `id` int(10) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `sender` int(10) NOT NULL,
  `receiver` int(10) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
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
(1, 'Florian', 'Merrien', NULL, 'Flo', 'noob', NULL, 'sqfqfsfsqsqfqsfsqfqfqssffsq', 'www.google.com', 'fmerrien.dev@gmail.com', 'Quimper', '2019-10-29 17:03:17', '2019-10-29 17:03:17'),
(2, 'Damien', 'Tailhades', NULL, 'regulardesigner', NULL, NULL, 'I\'m a designer trying to become developer after 12 years designing website and mobile apps.', NULL, NULL, 'Paris', '2019-10-29 17:51:10', '2019-10-29 17:51:10');

-- --------------------------------------------------------

--
-- Structure de la table `USER_TECH`
--

CREATE TABLE `USER_TECH` (
  `id` int(10) NOT NULL,
  `id_name` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `USER_WISHES`
--

CREATE TABLE `USER_WISHES` (
  `id` int(10) NOT NULL,
  `id_name` int(10) NOT NULL
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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_match` (`userid1`);

--
-- Index pour la table `MESSAGE`
--
ALTER TABLE `MESSAGE`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_sender` (`sender`);

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
  ADD KEY `fk_user_tech` (`id`),
  ADD KEY `fk_tech_name` (`id_name`);

--
-- Index pour la table `USER_WISHES`
--
ALTER TABLE `USER_WISHES`
  ADD KEY `fk_user_wish` (`id`),
  ADD KEY `fk_wish_name` (`id_name`);

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
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `MATCH`
--
ALTER TABLE `MATCH`
  ADD CONSTRAINT `fk_user_match` FOREIGN KEY (`userid1`) REFERENCES `USER` (`id`);

--
-- Contraintes pour la table `MESSAGE`
--
ALTER TABLE `MESSAGE`
  ADD CONSTRAINT `fk_user_sender` FOREIGN KEY (`sender`) REFERENCES `USER` (`id`);

--
-- Contraintes pour la table `USER_TECH`
--
ALTER TABLE `USER_TECH`
  ADD CONSTRAINT `fk_tech_name` FOREIGN KEY (`id_name`) REFERENCES `TECH` (`id`),
  ADD CONSTRAINT `fk_user_tech` FOREIGN KEY (`id`) REFERENCES `USER` (`id`);

--
-- Contraintes pour la table `USER_WISHES`
--
ALTER TABLE `USER_WISHES`
  ADD CONSTRAINT `fk_user_wish` FOREIGN KEY (`id`) REFERENCES `USER` (`id`),
  ADD CONSTRAINT `fk_wish_name` FOREIGN KEY (`id_name`) REFERENCES `WISH` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;