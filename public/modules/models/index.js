const mongoose = require('mongoose');

const Login = require('./login');
const SignUp = require('./signup');

const config = require('../config');

const connectionString = `${config.db}`;

mongoose.connect(connectionString);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = {
  db,
  Login,
  SignUp,
};