const express = require('express');

const router = express.Router();

const Sequelize = require('sequelize');

// const UserModel = require('../static/users');
const WishModel = require('../models/wish');
const TechModel = require('../models/tech');
const UserModel = require('../models/user');
const LevelModel = require('../models/level');


UserModel.belongsToMany(WishModel, {
  through: 'user_wishes',
  foreignKey: 'userId',
  // use as: 'toto', // to fit to table column name in the sequelize request
  timestamps: false,
});

UserModel.belongsToMany(TechModel, {
  through: 'user_techs',
  foreignKey: 'userId',
  // use as: 'toto', // to fit to table column name in the sequelize request
  timestamps: false,
});

LevelModel.hasMany(UserModel, { // will add levelId to UserModel
  foreignKey: 'levelId',
}); 

UserModel.belongsTo(LevelModel, { // will add levelId to UserModel
  foreignKey: 'levelId',
});


// FETCH All users
router.get('/', (req, res) => {
  UserModel.findAll().then((users) => {
    res.status(200).json(users);
  });
});

// INSERT User
router.post('/', (req, res) => {
  const {
    pseudo, firstName, lastName, token, experience, photo, bio, url, mail, location,
  } = req.body;

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

// faire une route pour récupérer un user avec son email
// en réponse toutes la data de l'utilisateur
router.post('/exist', (req, res) => {
  const { mail } = req.body;
  UserModel.findAll({
    attributes: ['mail'],
    where: {
      mail,
    },
  }).then((user) => {
    if (user.length === 0) {
      res.status(404).send('false');
    }
    res.status(200).send('true');
  }).catch((err) => {
    res.status(500).send('Something went wrong', err);
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
      {
        model: TechModel,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: LevelModel,
        // where: { id: Sequelize.col('levelId') },
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
  const {
    pseudo, firstName, lastName, token, experience, photo, bio, url, mail, location,
  } = req.body;

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
