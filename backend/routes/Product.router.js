const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product.controller');



router.get('/getproductByCategory/:category', ProductController.getproductByCategory);




module.exports = router;