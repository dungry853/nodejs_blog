const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
// var URLSlug = require('mongoose-slug-generator');
// mongoose.plugin(URLSlug);
const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    thumbnail: { type: String },
    description: { type: String, maxLength: 600 },
    slug: { type: String, unique: true },
    videoID: { type: String },
  },
  {
    timestamps: true,
  },
);

Course.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

module.exports = mongoose.model('Course', Course);
