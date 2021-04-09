const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/Chekout.controller');




router.post('/checkout',  checkoutController.checkout);






module.exports = router;