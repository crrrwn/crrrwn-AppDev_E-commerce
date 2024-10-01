const express = require('express');
const router = express.Router();
const controller = require('../controller/AppController');

router.get('/', controller.home);
// router.get('/adarlo', controller.adarlo);
// router.get('/kaye', controller.kaye);
// router.get('/ann', controller.ann);
// router.get('/gida', controller.gida);

module.exports = router;