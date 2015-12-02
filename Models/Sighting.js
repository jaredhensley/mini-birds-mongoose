var mongoose = require('mongoose');

var Sighting = mongoose.model('Sighting', new mongoose.Schema({
  name: {
    type: String,
    lowecase: true
  },
  order: {
    type: String,
    min: 1,
    max: 20
  },
  status: {
    type: String,
    lowercase: true,
    enum: ['extinct', 'extinct in the wild', 'critically endangered', 'endangered', 'vulnerable', 'near threatened', 'conservation dependent', 'least concern']
  },
  numberSeen: {
    type: Number,
    min: 1
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  timeStamp: {
    type: Date,
    default: Date.now
  }
}));

module.exports = Sighting;