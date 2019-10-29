const express = require('express');

const router = express.Router();

const MatchingModel = require('../static/userMatching');

const helpers = require('./../helper');


// FETCH All Matching
/* router.get('/', (req, res) => {
  res.send(MatchingModel);
}); */
router.get('/', (req, res) => {
  const result = MatchingModel.filter(
    (matching) => helpers.isAMatch(matching),
  );
  res.send({
    message: 'You get all the match on tindev',
    result,
  });
});

router.get('/:id', (req, res) => {
  const result = MatchingModel.filter(
    (matching) => helpers.isAMatch(matching),
  );
  res.send(helpers.isMyMatch(req.params.id, result));
});

// this is the route to get the matchs with a YEP on the specified USER ID.
router.get('/yep/:id', (req, res) => {
  const result = MatchingModel.filter(
    (matching) => matching.swipedUserId === parseInt(req.params.id, 10)
    && matching.currentUserStatus === true,
  );
  res.send(result);
});

// this is the route to get the matchs with a NOPE on the specified USER ID.
router.get('/nope/:id', (req, res) => {
  const result = MatchingModel.filter(
    (matching) => matching.swipedUserId === parseInt(req.params.id, 10)
    && matching.currentUserStatus === false,
  );
  res.send(result);
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
