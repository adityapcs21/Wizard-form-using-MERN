const express = require('express');
const businessRoutes = express.Router();
var MongoClient = require('mongodb').MongoClient;
const config = require('./DB.js');

// Require Business model in our routes module
let Business = require('./model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  console.log("hii");
  let business = new Business({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    myid:1,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    course:req.body.course,
    college:req.body.course,
    year:req.body.year,
    percentage:req.body.percentage,
    companyName:req.body.companyName,
    from:req.body.from,
    to:req.body.to,
    designation:req.body.designation,
    LinkedIn:req.body.LinkedIn,
    Facebook:req.body.Facebook,
    GitHub:req.body.GitHub,
    hobbies:req.body.hobbies

  });//req.body
  // console.log(business);
  // business.save()
  //   .then(business => {
  //     res.status(200).json({'business': 'business in added successfully'});
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });

  //trying with mongodb directly

  MongoClient.connect(config.mongodb, function(err, db) {
    if (err) throw err;
    var dbo = db.db("crudapp");
    var myobj = req.body;
    dbo.collection("student").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/users').get(function (req, res) {
  let id = req.query.id;
  Business.findOne({_id:req.query.id}, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete').get(function (req, res) {
  console.log(req.query.id);
    Business.findOneAndDelete({_id:req.query.id}, function(err, business){
        if(err) 
          {
            console.log(err);
}

        else {
          console.log(business)
          res.send('Successfully removed');
        }
      
    });
});



module.exports = businessRoutes;