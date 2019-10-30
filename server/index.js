/* eslint-disable radix */
// https://github.com/socketio/socket.io/issues/936
const express = require('express');
const app = express();
app.use(express.json());

const http = require('http');

const cors = require('cors');
app.use(cors());

const Sequelize = require('sequelize');
const db = require('./config/database');

const user = require('./routes/profil');
const matching = require('./routes/matching');
const wish = require('./routes/wish');

app.use('/profil', user);
app.use('/matching', matching);
app.use('/wish', wish);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.set('port', process.env.PORT || 3001);

const server = http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

const socket = require('socket.io');

const io = socket.listen(server);
io.sockets.on('connection', () => {
  console.log('hello world im a hot socket');
});

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
