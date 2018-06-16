// customerRoutes.js

var express = require('express');
var app = express();
var customerRoutes = express.Router();

// Require Item model in our routes module
var Customer = require('../models/Customer');

// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  var customer = new Customer(req.body);
   customer.save()
    .then(item => {
    res.status(200).json({'customer': 'Customer added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/').get(function (req, res) {
   Customer.find(function (err, customers){
    if(err){
      console.log(err);
    }
    else {
      res.json(customers);
    }
  });
});

// Defined edit route
customerRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Customer.findById(id, function (err, customer){
      res.json(customer);
  });
});

//  Defined update route
customerRoutes.route('/update/:id').post(function (req, res) {
   Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
      customer.firstName = req.body.firstName;
      customer.lastName = req.body.lastName;
      customer.email = req.body.email;
      customer.telephone = req.body.telephone;

      customer.save().then(customer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
customerRoutes.route('/delete/:id').get(function (req, res) {
   Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = customerRoutes;