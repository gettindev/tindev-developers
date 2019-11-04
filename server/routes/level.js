const express = require('express');

const router = express.Router();

const LevelModel = require('../models/level');

// FETCH All wishes
router.get('/', (req, res) => {
  LevelModel.findAll().then((levels) => {
    res.status(200).json(levels);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  LevelModel.findByPk(id)
    .then((level) => {
      if (level) {
        res.json(level);
      }
      else {
        res.status(404).send();
      }
    });
});


module.exports = router;
