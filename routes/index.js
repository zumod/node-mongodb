var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; //Importing MongoClient module

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req,res) => { //Post method for handling data
  console.log(req.body)
  MongoClient.connect('mongodb://localhost:27017',(err,client) => { //Connecting mongo db
    if (err) throw err  // Shows error if db not connected
    client.db('Node').collection('users').insertOne(req.body) //Callback function
  })
  res.send('User registered successfully')
})

module.exports = router;  //Exports router module for app.js file
