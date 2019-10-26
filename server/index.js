/* eslint-disable radix */
// https://github.com/socketio/socket.io/issues/936
const express = require('express');

const app = express();

const http = require('http');

app.use(express.json());

app.set('port', process.env.PORT || 3001);

const server = http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

const socket = require('socket.io');

const io = socket.listen(server);
io.sockets.on('connection', () => {
  console.log('hello world im a hot socket');
});

const cors = require('cors');

const user = require('./routes/profil');

app.use('/profil', user);

const matchs = require('./routes/matchs');

app.use('/match', matchs);


app.use(cors());


app.get('/', (req, res) => {
  res.send('Tindev API');
});


/*
 * Socket.io
 */
let id = 0;

io.on('connection', (socket) => {
  socket.on('send_message', (message) => {
    message.id = ++id;
    io.emit('send_message', { message });
  });
});

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


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
