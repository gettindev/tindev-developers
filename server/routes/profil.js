const express = require('express');

const router = express.Router();

const Sequelize = require('sequelize');

const db = require('../config/database');

// const UserModel = require('../static/users');
const WishModel = require('../models/wish');
const TechModel = require('../models/tech');
const UserModel = require('../models/user');
const LevelModel = require('../models/level');
const UserWishes = require('../models/user_wishes');


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
  UserModel.findAll({
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
      },
    ],
    limit: 5,
    order: db.random(),
  }).then((users) => {
    res.status(200).json(users);
  });
});

// INSERT User
router.post('/', (req, res) => {
  const {
    pseudo, firstName, lastName, token, photo, bio, url, mail, location,
  } = req.body;

  let { levelId } = req.body;

  levelId = parseInt(levelId, 10);

  const user = {
    pseudo,
    firstName,
    lastName,
    token,
    levelId,
    photo,
    bio,
    url,
    mail,
    location,
  };

  UserModel.create(user).then((lastUser) => {
    res.send(lastUser);
  });
});

// faire une route pour récupérer un user avec son email
// en réponse toutes la data de l'utilisateur
router.post('/exist', (req, res) => {
  const { mail } = req.body;
  UserModel.findAll({
    attributes: ['id', 'mail'],
    where: {
      mail,
    },
  }).then((user) => {
    res.status(200).send(user);
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
    pseudo, firstName, lastName, token, levelId, photo, bio, url, mail, location,
  } = req.body;

  UserModel.update(
    {
      pseudo,
      firstName,
      lastName,
      token,
      levelId,
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

router.get('/settings/:id', (req, res) => {
  const { id } = req.params;
  UserModel.findByPk(id, {
    attributes: ['id', 'location'],
    include: [
      {
        model: WishModel,
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

router.post('/settings/:id', (req, res) => {
  const { id } = req.params;
  const updatedWishes = req.body.wishesArray;
  const { location } = req.body;

  const bulkCreator = (userIdentifier, array) => {
    const generateBulkCreate = array.map(
      (item) => {
        return { userId: parseInt(id, 10), wishId: item };
      },
    );
    return generateBulkCreate;
  };

  UserWishes.destroy({
    where: {
      userId: id,
    },
  }).then(() => {
    UserWishes.bulkCreate(bulkCreator(id, updatedWishes)).then((user) => {
      if (user) {
        res.json(user);
      }
      else {
        res.status(404).send();
      }
    });
  });
});

module.exports = router;
