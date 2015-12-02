var Sighting = require('../../Models/Sighting');

module.exports = {

  get: function (req, res) {
    Sighting.find(req.query).exec().then(function (sightings) {
      return res.json(sightings);
    });
  },

  getOne: function (req, res) {
    Sighting
      .findOne({
        _id: req.params.id
      })
      .exec()
      .then(function (sightings) {
        return res.json(sightings);
      });
  },

  post: function (req, res) {
    var sighting = new Sighting(req.body);
    sighting.save().then(function (err, result) {
      if (!err) {
        return res.status(201).end();
      } else {
        console.log(err);
        res.json(err);
      }
    })
  },

  put: function (req, res) {
    Sighting.update({
      _id: req.params.id
    }, req.body).then(function (err, result) {
      if (!err) {
        return res.status(201).end();
      } else {
        console.log(err);
        res.json(err);
      }
    })
  },

  delete: function (req, res) {
    Sighting.remove({
      _id: req.params.id
    }).then(function (err, result) {
      if (!err) {
        return res.status(201).end();
      } else {
        console.log(err);
        res.json(err);
      }
    });

  }

};