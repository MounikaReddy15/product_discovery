

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

router.get('/getProducts', controller.getProducts);
router.get('/',controller.showProducts);
router.get('/getCategory/:category', controller.getCategory);
// router.post('/uploadcsv', controller.uploadCsv);
// router.get('/display', controller.displayFile);

module.exports = router;