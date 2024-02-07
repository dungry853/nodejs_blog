const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewsController');

const siteController = require('../app/controllers/SiteController');

//search
router.get('/search', siteController.search);

//news
router.get('/news/:slug', NewsController.show);
router.get('/news', siteController.news);

//home
router.get('/', siteController.home);

module.exports = router;
