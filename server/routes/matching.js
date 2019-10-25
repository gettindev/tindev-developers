const express = require('express');

const router = express.Router();

const MatchingModel = require('../static/userMatching');


// FETCH All users
router.get('/', (req, res) => {
  res.send(MatchingModel);
});

router.get('/yep/:id', (req, res) => {
  // return the matching with my yep match
  // pour mon id je veux avoir les matchings
  const result = MatchingModel.filter(matching => matching.swipedUserId === parseInt(req.params.id) && matching.currentUserStatus === true);
  res.send(result);
});

router.get('/nope/:id', (req, res) => {
  // return the matching with my nope match
  const result = MatchingModel.filter(matching => matching.swipedUserId === parseInt(req.params.id) && matching.currentUserStatus === false);
  res.send(result);
});

router.post('/yep', (req, res) => {
  // en fonction de ma data et des utilisateurs
  // je push ou je slice
  // si currentUserId et swipedUserid exist
  // je slice()
  // sinon je push
  const matching = {
    currentUserId: req.body.currentUserId,
    currentUserIdStatus: true,
    swipedUserId: req.body.swipedUserId,
  };
  res.send('Yep', matching);
});

router.post('/nope', (req, res) => {
  const matching = {
    currentUserId: req.body.currentUserId,
    currentUserIdStatus: false,
    swipedUserId: req.body.swipedUserId,
  };
  res.send('Nope', matching);
});

module.exports = router;
