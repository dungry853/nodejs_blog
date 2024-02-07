const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  search(req, res) {
    res.render('news');
  }
  news(req, res) {
    res.render('news');
  }
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new SiteController();
