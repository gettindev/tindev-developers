/* eslint-disable radix */
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('API running'));

app.get('/profil', (req, res) => res.send('This is profile page'));

app.get('/matching', (req, res) => res.send('Matching flux...'));

// ======== MOSH
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];


// //// GET list of courses ////
app.get('/courses', (req, res) => res.send(courses));

// /// find course by ID ////
app.get('/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send('course not found');

  res.send(course);
});


app.post('/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// mettre le script "start:server": "node server/index.js" dans package.json

// serve”: “nodemon server.js”



// Modulariser les routes example avec courses
// 1 - creer un module courses.js ou on met les routes api/courses
// 2- load express
// 3- const router = express.Router() car express sur app ne peut pas marcher
// 4- creer les routes sur router (ex: router.get(...). router.post(...))
// 5 - ne pas oublier d'export le module = module.exports = router;
// 6- dans index.js const courses = require('./courses')
// 7- enfin app.use('api/courses', courses) ==> toutes routes qui commencent par api/courses ==> le router courses va le gerer
// 8- donc dans router je dois creer mes routes a partir de /  exemple /:param