// Example schema usage
// var Example = require('../models/Schema');

module.exports = function(app) {
  
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home'
    });
  });
  
};