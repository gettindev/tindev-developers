/* eslint-disable radix */
// https://github.com/socketio/socket.io/issues/936
const express = require('express');

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3001);

const cors = require('cors');

app.use(cors());

const Sequelize = require('sequelize');

const db = require('./config/database');

const user = require('./routes/profil');
const matching = require('./routes/matching');
const wish = require('./routes/wish');
const tech = require('./routes/tech');
const level = require('./routes/level');
const message = require('./routes/message');


app.use('/profil', user);
app.use('/matching', matching);
app.use('/wish', wish);
app.use('/tech', tech);
app.use('/level', level);
app.use('/messages', message);

app.get('/', (req, res) => {
  res.send('Tindev API');
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const http = require('http');

const server = http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

const socket = require('socket.io');

const io = socket.listen(server);
io.sockets.on('connection', () => {
  console.log('hello world im a hot socket');
});

/*
 * Socket.io
 */
let id = 0;

io.on('connection', (socket) => {
  socket.on('send_message', (message) => {
    console.log('send message:', message);
    message.id = ++id;
    console.log('send message apres id++', message);


    io.emit('send_message', { message });
  });
});

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
