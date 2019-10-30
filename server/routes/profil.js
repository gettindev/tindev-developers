const express = require('express');

const router = express.Router();

// const UserModel = require('../static/users');
const UserModel = require('../models/user');

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
  const user = UserModel.find((user) => user.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  res.send(user);
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
// router.put('/:id', (req, res) => {
//   const user = UserModel.find((user) => user.id === parseInt(req.params.id, 10));
//   if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
//   user.firstName = req.body.firstName;
//   user.lastName = req.body.lastName;
//   UserModel.update()
//   res.send(user);
// });

router.delete('/:id', (req, res) => {
  const user = UserModel.find((user) => user.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  const index = UserModel.indexOf(user);
  UserModel.splice(index, 1);
  res.send(user);
});

module.exports = router;
