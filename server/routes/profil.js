const express = require('express');

const router = express.Router();

// const UserModel = require('../static/users');
const WishModel = require('../models/wish');
const UserModel = require('../models/user');

UserModel.belongsToMany(WishModel, {
  through: 'user_wishes',
  foreignKey: 'userId',
  // use as: 'toto', // to fit to table column name in the sequelize request
  timestamps: false,
});

// FETCH All users
router.get('/', (req, res) => {
  UserModel.findAll().then((users) => {
    res.status(200).json(users);
  });
});

// INSERT User
router.post('/', (req, res) => {
  const { pseudo, firstName, lastName, token, experience, photo, bio, url, mail, location } = req.body;

  const user = {
    pseudo,
    firstName,
    lastName,
    token,
    experience,
    photo,
    bio,
    url,
    mail,
    location,
  };

  UserModel.create(user).then(() => {
    res.send(user);
  });
});

// FETCH user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // https://github.com/sequelize/sequelize/issues/2541 to see how show and hide attributes
  UserModel.findByPk(id, {
    include: [
      {
        model: WishModel,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((user) => {
      if (user) {
        res.json(user);
      }
      else {
        res.status(404).send();
      }
    });
});

// EDIT User details
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { pseudo, firstName, lastName, token, experience, photo, bio, url, mail, location } = req.body;
  UserModel.update(
    { 
      pseudo,
      firstName,
      lastName,
      token,
      experience,
      photo,
      bio,
      url,
      mail,
      location, 
  },
    { where: { id } },
  ).then((user) => {
    res.send(user);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  UserModel.findByPk(id).then((user) => {
    user.destroy().then(() => {
      res.status(204).send();
    });
  });
});

module.exports = router;
