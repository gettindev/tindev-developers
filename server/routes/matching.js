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
router.post('/yep', (req, res) => {
  // I get the current user ID and the swiped user ID
  const yep = {
    currentUser: req.body.currentId,
    swipedUser: req.body.swipedId,
  };
  // I can check if a matching already exist with both user ID
  const result = helpers.isMatchingAlreadyExist(yep.currentUser, yep.swipedUser, MatchingModel);
  // If the result of the checking is an empty Array
  // This id means that the matching doesn't exist
  if (Array.isArray(result) && result.length === 0) {
    // because the matching doen't exist, I can create a new one
    const create = helpers.createNewMatching(
      yep.currentUser, true, yep.swipedUser, MatchingModel,
    );
    res.send(create);
  }
  else {
    // the matching exist, I can get his ID
    const matchingExistId = result[0].id;
    // and do an update on that matching
    const update = helpers.updateMatchingResult(matchingExistId, true, MatchingModel);
    // because the current user give a 'YEP' to that matching the second params is TRUE
    res.send(helpers.isAMatch(update));
  }
});

// this is the route to give a NOPE to a user
router.post('/nope', (req, res) => {
  // I get the current user ID and the swiped user ID
  const nope = {
    currentUser: req.body.currentId,
    swipedUser: req.body.swipedId,
  };
  // I can check if a matching already exist with both user ID
  const result = helpers.isMatchingAlreadyExist(nope.currentUser, nope.swipedUser, MatchingModel);
  // If the result of the checking is an empty Array
  // This id means that the matching doesn't exist
  if (Array.isArray(result) && result.length === 0) {
    // because the matching doen't exist, I can create a new one
    const create = helpers.createNewMatching(
      nope.currentUser, false, nope.swipedUser, MatchingModel,
    );
    res.send(create);
  }
  else {
    // the matching exist, I can get his ID
    const matchingExistId = result[0].id;
    // and do an update on that matching
    const update = helpers.updateMatchingResult(matchingExistId, false, MatchingModel);
    // because the current user give a 'NOPE' to that matching the second params is FALSE
    res.send(update);
  }
});

module.exports = router;
