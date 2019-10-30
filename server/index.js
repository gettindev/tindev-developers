/* eslint-disable radix */
const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
// const Sequelize = require('sequelize');

// const user = require('./routes/profil');
const matching = require('./routes/matching');

const db = require('./config/database');
const userModel = require('./models/user');
const user = require('./routes/profil');

db
  .authenticate()
  .then(() => {
    userModel.create({ pseudo: "toto" })
      .then((user) => {
        console.log('inseres Toto');
      });
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(cors());

app.use('/profil', user);
app.use('/matching', matching);

app.use('/match', matchs);

app.get('/', (req, res) => {
  res.send('Tindev API');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
