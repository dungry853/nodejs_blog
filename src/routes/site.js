const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewsController');
const coursesController = require('../app/controllers/CourseController');
const siteController = require('../app/controllers/SiteController');

//search
router.get('/search', siteController.search);

//news
router.get('/news/:slug', NewsController.show);
router.get('/news', siteController.news);

//home & courses
router.get('/courses/create',coursesController.createGET);
router.post('/courses/createPOST',coursesController.createPOST);
router.get('/courses/:slug',coursesController.show);
//router theo id
// router.get('/courses/:id',coursesController.show);
router.get('/', siteController.home);

module.exports = router;
