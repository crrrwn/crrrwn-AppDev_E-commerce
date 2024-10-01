const express = require('express');
const router = express.Router();
const controller = require('../controller/AppController');

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/blog2', controller.blog2);
router.get('/contact', controller.contact);
router.get('/features', controller.features);
router.get('/product', controller.product);
router.get('/testimonial', controller.testimonial);






module.exports = router;