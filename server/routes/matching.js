const express = require('express');

const router = express.Router();

const MatchingModel = require('../static/userMatching');

const helpers = require('./../helper');


// FETCH All users
router.get('/', (req, res) => {
  res.send(MatchingModel);
});

router.get('/yep/:id', (req, res) => {
  // pour l'id en parametre je veux avoir la liste des
  // matching YEP qui ont étés donnés par les autres utilisateurs
  const result = MatchingModel.filter(
    (matching) => matching.swipedUserId === parseInt(req.params.id, 10)
    && matching.currentUserStatus === true,
  );
  res.send(result);
});

router.get('/nope/:id', (req, res) => {
  // return the matching with my nope match
  const result = MatchingModel.filter(
    (matching) => matching.swipedUserId === parseInt(req.params.id, 10)
    && matching.currentUserStatus === false,
  );
  res.send(result);
});

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
    // because the current user give a 'YEP' to that matching the second params is TRUE
    const update = helpers.updateMatchingResult(matchingExistId, true, MatchingModel);
    res.send(helpers.isAMatch(update));
  }
});

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
    // because the current user give a 'NOPE' to that matching the second params is FALSE
    const update = helpers.updateMatchingResult(matchingExistId, false, MatchingModel);
    res.send(update);
  }
});

module.exports = router;
