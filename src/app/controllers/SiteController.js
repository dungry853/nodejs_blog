const Course = require('../models/Course');
class SiteController {
  search(req, res) {
    res.render('news');
  }
  news(req, res) {
    res.render('news');
  }
  home(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((err) => {
        res.status(400).json({ error: 'ERROR!!!' });
      });
  }
}
module.exports = new SiteController();
