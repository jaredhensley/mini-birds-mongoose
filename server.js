// npm packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Sighting = require('./Models/Sighting');
var controller = require('./ServerAssets/controllers/controller');

var app = express();

//middleware

app.use(cors());
app.use(bodyParser.json());


//endpoints

app.get('/sightings', controller.get);

app.get('/sightings/:id', controller.getOne);

app.post('/sightings', controller.post);

app.put('/sightings/:id', controller.put);

app.delete('/sightings/:id', controller.delete);

app.listen(3000);

mongoose.connect('mongodb://localhost/birdSightings');