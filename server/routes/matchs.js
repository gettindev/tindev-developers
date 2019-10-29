const express = require('express');

const router = express.Router();

// const UserModel = require('../static/users');


// FETCH All users
router.get('/', (req, res) => {
  res.send('toto');
});

module.exports = router;
