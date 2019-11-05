const express = require('express');

const router = express.Router();

const WishModel = require('../models/wish');
const test = "test";

// FETCH All wishes
router.get('/', (req, res) => {
  WishModel.findAll().then((wishes) => {
    res.status(200).json(wishes);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  WishModel.findByPk(id)
    .then((user) => {
      if (user) {
        res.json(user);
      }
      else {
        res.status(404).send();
      }
    });
});


module.exports = router;
