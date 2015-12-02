// npm packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Sighting = require('./Models/Sighting');


var app = express();

//middleware

app.use(cors());
app.use(bodyParser.json());


//endpoints


app.get('/', function (req, res) {
  res.status(200).send('hey hey hey');
})

app.post('/sightings', function (req, res) {
  var sighting = new Sighting(req.body);
  sighting.save().then(function (err, result) {
    if (!err) {
      return res.status(201).end();
    } else {
      console.log(err);
      res.json(err);
    }
  });
});

app.get('/sightings', function (req, res) {
  Sighting.find(req.query).exec().then(function (sightings) {
    return res.json(sightings);
  })
});






app.listen(3000);

mongoose.connect('mongodb://localhost/birdSightings');