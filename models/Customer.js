var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Customer = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  telephone: {
      type: String
  }
},{
    collection: 'customers'
});

module.exports = mongoose.model('Customer', Customer);