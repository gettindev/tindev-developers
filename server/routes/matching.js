const express = require('express');

const router = express.Router();

const MatchingModel = require('../static/users');


// FETCH All users
router.get('/', (req, res) => {
  res.send(MatchingModel);
});

module.exports = router;
