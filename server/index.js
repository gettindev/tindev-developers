/* eslint-disable radix */
const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

const db = require('./config/database');
const user = require('./routes/profil');
const matching = require('./routes/matching');
const wish = require('./routes/wish');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(cors());

app.use('/profil', user);
app.use('/matching', matching);
app.use('/wish', wish);

app.get('/', (req, res) => {
  res.send('Tindev API');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
