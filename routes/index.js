var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req,res) => {
  console.log(req.body)
  MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if (err) throw err
    client.db('Node').collection('users').insertOne(req.body)
  })
  res.send('User registered successfully')
})

module.exports = router;
