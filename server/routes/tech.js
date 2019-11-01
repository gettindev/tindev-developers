const express = require('express');

const router = express.Router();

const TechModel = require('../models/tech');

// FETCH All wishes
router.get('/', (req, res) => {
  TechModel.findAll().then((wishes) => {
    res.status(200).json(wishes);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  TechModel.findByPk(id)
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
