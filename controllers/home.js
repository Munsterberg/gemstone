// Example schema usage
// var Example = require('../models/Schema');

exports.getIndexPage = function(req, res) {
  res.render('index', {
    title: 'Home'
  });
};