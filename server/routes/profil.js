const express = require('express');

const router = express.Router();

// const UserModel = require('../static/users');
const WishModel = require('../models/wish');
const UserModel = require('../models/user');

// FETCH All users
router.get('/', (req, res) => {
  UserModel.findAll().then((users) => {
    res.status(200).json(users);
  });
});

// INSERT User
router.post('/', (req, res) => {
  const user = {
    firstName: req.body.firstName,   
    lastName: req.body.lastName,
    pseudo: req.body.pseudo,
  };
  UserModel.create(user).then(() => {
    res.send(user);
  });
});

UserModel.belongsToMany(WishModel, {
  through: 'user_wishes',
  foreignKey: 'userId',
  timestamps: false,
});

// User.associate = function(models) {
//   User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
//   User.belongsToMany(models.WorkingDay, {through: 'UsersWorkingDays', foreignKey: 'userId', as: 'days'})
// };
//

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
  const user = UserModel.find((user) => user.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  res.send(user);
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
