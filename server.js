var express = require('express');
const ejs = require('ejs');

const config = require('./public/modules/config');
const port = config.port;

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const db = require('./public/modules/models');

app.listen(port);
console.log(`listening to port`,port);

const routes = require('./public/modules/routes');
app.use('/', routes);