var mongoose = require('mongoose');

var exampleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});

module.exports = mongoose.model('Example', exampleSchema);