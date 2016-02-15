const passport = require('passport');
const User = require('../models/User');

module.exports = function(app) {
  
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home'
    });
  });
  
  // GET register form
  app.get('/register', function(req, res) {
    res.render('register', {
      title: 'Register'
    });
  });
  
  // POST register form
  app.post('/register', function(req, res) {
    const user = new User({
      username: req.body.username,
      email: req.body.email
    });
    
    User.register(user, req.body.password, function(err, user) {
      if(err) {
        console.log(err);
        return res.render('register');
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      })
    });
  });
  
  // GET login form
  app.get('/login', function(req, res) {
    res.render('login', {
      title: 'Login'
    });
  });
  
  // POST login form
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), function(req, res) {
  });
  
  // Logout
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
};