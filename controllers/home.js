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
  
  // POST login form
  
};