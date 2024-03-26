const mongoose = require('mongoose');

const tempSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  temp: { type: String, required: true },
});

module.exports = mongoose.model('Temp', tempSchema);