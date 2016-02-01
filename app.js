// Module Dependencies
// ===========================
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var flash = require('express-flash');
var mongoose = require('mongoose');
var sass = require('node-sass');
var expressValidator = require('express-validator');
var favicon = require('serve-favicon');
var connectAssets = require('connect-assets');
var methodOverride = require('method-override');
var lusca = require('lusca');
var path = require('path');


// Controllers
// ===========================
var homeController = require('./controllers/home');

// API keys, Passport info, and Secrets
// ===========================
var secrets = require('./config/secrets');


// Create Express App
var app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/database');
mongoose.connection.on('error', function() {
  console.error('MongoDB connection error. Please make sure MongoDB is running.');
});

// Express Config / Middleware
// ===========================
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(connectAssets({
  paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')]
}));
app.use(logger('dev'));
// Uncomment once you add Favicon 
// app.use(favicon(path.join(__dirname, 'public/favicon.png'))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret
}));
app.use(flash());
app.use(lusca({
  csrf: true,
  xframe: 'SAMEORIGIN',
  xssProtection: true
}));
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(function(req, res, next) {
  if (/api/i.test(req.path)) req.session.returnTo = req.path;
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
sass.render({
  file: '/public/css/style.scss'
}, function(err, result) {
  // no idea what goes in here
});

// App routes
// ===========================
app.get('/', homeController.getIndexPage);


// Error Handler
app.use(errorHandler());

// Start Express Server
app.listen(3000, function() {
  console.log('Server is running on port 3000!');
});

// module.exports = app;