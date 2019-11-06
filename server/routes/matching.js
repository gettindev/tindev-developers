const express = require('express');

const router = express.Router();

const Sequelize = require('sequelize');

const db = require('../config/database');

const { Op } = Sequelize;

// Model static
const MatchingModel = require('../static/userMatching');
const UsersModel = require('../static/users');
// Sequelize Models
const Matching = require('../models/matching');
const Users = require('../models/user');
const WishModel = require('../models/wish');
const TechModel = require('../models/tech');
const LevelModel = require('../models/level');
// helpers
const helpers = require('./../helpers/matching');
const userHelpers = require('./../helpers/users');

router.get('/', (req, res) => {
  // All data in the machings tables
  Matching.findAll().then((matchs) => {
    res.status(200).json(matchs);
  });
});

router.get('/:id', async (req, res) => {
  // all the TRUE TRUE matchs according to the user id
  const matchs = await Matching.findAll({
    where: {
      [Op.and]: {
        [Op.or]: [{ currentUserId: req.params.id }, { swipedUserId: req.params.id }],
        [Op.and]: [{ currentUserStatus: true }, { swipedUserStatus: true }],
      },
    },
  });
  // All the users ids involved in the machs minus the req.params.id (the current user)
  if (matchs.length !== 0) {
    const userIds = helpers.myUsersMatchList(parseInt(req.params.id, 10), matchs);

    // All the users informations (id and photo)
    const usersListResult = await Users.findAll({
      where: {
        id: {
          [Op.or]: userIds,
        },
      },
      attributes: ['id', 'photo'],
    });
    // the generated responce with all previous informations
    res.status(200).json({
      matchs,
      userIds,
      usersListResult,
    });
  }
  res.status(404).send('No matchs found!');
});

router.get('/alreadyseen/:id', async (req, res) => {
  /* const alreadySwiped = await Matching.findAll({
    where: {
      currentUserId: req.params.id,
    },
  }); */

  /* const alreadySwiped = await Matching.findAll({
    where: {
      [Op.and]: [{ swipedUserId: req.params.id }, { swipedUserStatus: null }],
    },
  }); */

  const userIds = helpers.myUsersMatchList(parseInt(req.params.id, 10), alreadySwiped);

  userIds.push(parseInt(req.params.id, 10));

  const filteredUsers = await Users.findAll({
    where: {
      id: {
        [Op.notIn]: userIds,
      },
    },
    include: [
      {
        model: WishModel,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: TechModel,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: LevelModel,
      },
    ],
    limit: 5,
    order: db.random(),
  });

  res.status(200).json({
    alreadySwiped,
    userIds,
    filteredUsers,
  });
});

// this is the route to get the matchs with a YEP on the specified USER ID.
router.get('/yep/:id', async (req, res) => {
  // All the YEP's given to a user id.
  // The user status for those matchings is NULL
  const myYep = await Matching.findAll({
    where: {
      [Op.and]: [
        { swipedUserId: req.params.id },
        { currentUserStatus: true },
        { swipedUserStatus: null },
      ],
    },
  });

  if (myYep.length !== 0) {
    res.status(200).json(myYep);
  }
  res.status(404).send('Bummer! Nobody gives a YEP to that user.');
});

// this is the route to give a YEP to a user
router.post('/yep', async (req, res) => {
  // I get the current user ID and the swiped user ID
  const matchings = await Matching.findAll({
    where: {
      [Op.and]: [
        { currentUserId: req.body.swipedId },
        { swipedUserId: req.body.currentId },
      ],
    },
  });
  const matchId = matchings[0];
  if (matchings.length !== 0) {
    // do the match to update the matching
    Matching.update(
      {
        swipedUserId: req.body.currentId,
        swipedUserStatus: true,
      },
      {
        where: { id: matchId.id },
      },
    ).then(() => {
      res.status(200).send('updated match');
    });
  }
  else {
    // do the math to create a new matching
    const newMatching = {
      currentUserId: req.body.currentId,
      currentUserStatus: true,
      swipedUserId: req.body.swipedId,
      swipedUserStatus: null,
    };
    Matching.create(newMatching).then(() => {
      res.status(200).send(newMatching);
    });
  }
});

// this is the route to give a NOPE to a user
router.post('/nope', async (req, res) => {
  // I get the current user ID and the swiped user ID
  const matchings = await Matching.findAll({
    where: {
      [Op.and]: [
        { currentUserId: req.body.swipedId },
        { swipedUserId: req.body.currentId },
      ],
    },
  });
  const matchId = matchings[0];
  if (matchings.length !== 0) {
    // do the match to update the matching
    Matching.update(
      {
        swipedUserId: req.body.currentId,
        swipedUserStatus: false,
      },
      {
        where: { id: matchId.id },
      },
    ).then(() => {
      res.status(200).send('updated match');
    });
  }
  else {
    // do the math to create a new matching
    const newMatching = {
      currentUserId: req.body.currentId,
      currentUserStatus: false,
      swipedUserId: req.body.swipedId,
      swipedUserStatus: null,
    };
    Matching.create(newMatching).then(() => {
      res.status(200).send(newMatching);
    });
  }
});

module.exports = router;
