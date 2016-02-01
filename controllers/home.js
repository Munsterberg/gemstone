exports.getIndexPage = function(req, res) {
  res.render('index', {
    title: 'Home'
  });
};