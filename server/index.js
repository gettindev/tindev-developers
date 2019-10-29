/* eslint-disable radix */
const express = require('express');

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



// app.get('/create', (req, res) => {
  
//   // res.send(toto);
// });

app.use('/profil', user);
app.use('/matching', matching);

app.get('/', (req, res) => {
  res.send('Tindev API');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// X mettre le script "start:server": "node server/index.js" dans package.json
// X serve”: “nodemon server.js”


// // Modulariser les routes example avec courses
// // 1 - creer un module courses.js ou on met les routes api/courses
// // 2- load express
// // 3- const router = express.Router() car express sur app ne peut pas marcher
// // 4- creer les routes sur router (ex: router.get(...). router.post(...))
// // 5 - ne pas oublier d'export le module = module.exports = router;
// // 6- dans index.js const courses = require('./courses')
// // 7- enfin app.use('api/courses', courses) ==> toutes routes qui commencent par api/courses ==> le router courses va le gerer
// // 8- donc dans router je dois creer mes routes a partir de /  exemple /:param
