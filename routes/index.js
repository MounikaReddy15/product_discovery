

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

// to show products on screen
router.get('/',controller.showProducts);

// to get the selected products
router.get('/category/:categoryname',controller.getCategoryProducts)

// api routes
router.get('/getProducts', controller.getProducts);
router.get('/getCategory/:category', controller.getCategory);


module.exports = router;