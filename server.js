// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 4200;
var mongoose = require('mongoose');
var path     = require('path');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');
var krutiai = require('./config/krutiai');
//krutiai.getResponseFromKruti('how are you?','Tml0ZWVuIEF1dGFkZQ==')
// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// routes ======================================================================
app.use('/', express.static(path.join(__dirname, '/src/app/dist')));
require('./routes/routes.js')(app,path,krutiai); // load our routes and pass in our app and fully configured passport
console.log('Buss',path.join(__dirname, '/src/app/dist/index.html'));

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);