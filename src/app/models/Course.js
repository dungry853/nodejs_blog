const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  thumbnail: { type: String },
  description: { type: String, maxLength: 600 },
  slug: {type:String},
  videoID: {type:String}
});

module.exports = mongoose.model('Course', Course);
