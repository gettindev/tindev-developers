const express = require('express');

const router = express.Router();

const Sequelize = require('sequelize');

const MessagesModel = require('../models/messages');

const { Op } = Sequelize;

// FETCH All wishes
router.get('/', (req, res) => {
  /* MessagesModel.bulkCreate([
    { content: 'Je suis totalement stressé...', sender: 2, receiver: 3 },
    { content: 'Oui moi aussi ! ;) Mais ça va le faire.', sender: 3, receiver: 2 },
  ]).then((messages) => {
    res.status(200).send(messages);
  }); */
  MessagesModel.findAll()
    .then((messages) => {
      res.status(200).json(messages);
    });
});

router.post('/', (req, res) => {
  const { currentId } = req.body;
  const { userId } = req.body;
  MessagesModel.findAll({
    where: {
      [Op.or]: [
        {
          sender: currentId,
          receiver: userId,
        },
        {
          sender: userId,
          receiver: currentId,
        },
      ],
    },
  }).then((messages) => {
    res.send(messages);
  });
});


module.exports = router;
