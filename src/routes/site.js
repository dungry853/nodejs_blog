const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewsController');

const siteController = require('../app/controllers/SiteController');

//search
router.use('/search',siteController.search);

//news
router.use('/news/:slug',NewsController.show);
router.use('/news',siteController.news);

//home
router.use('/',siteController.home);

module.exports = router;