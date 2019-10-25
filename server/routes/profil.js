const express = require('express');

const router = express.Router();

const UserModel = require('../static/users');


// FETCH All users
router.get('/', (req, res) => {
  res.send(UserModel);
});

// INSERT User
router.post('/', (req, res) => {
  const user = {
    id: UserModel.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  UserModel.push(user);
  res.send(user);
});

// FETCH user by ID
router.get('/:id', (req, res) => {
  const user = UserModel.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  res.send(user);
});

// EDIT User details
router.put('/:id', (req, res) => {
  const user = UserModel.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const user = UserModel.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('<h1 style="color:pink;">Status 404...</h1><p>The given id was not found.</p>');
  const index = UserModel.indexOf(user);
  UserModel.splice(index, 1);
  res.send(user);
});

module.exports = router;
