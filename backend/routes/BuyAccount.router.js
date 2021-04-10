const express = require('express');
const router = express.Router();
const buyAccountController = require('../controllers/BuyAccount.controller')




router.post('/buyAccount',buyAccountController.buyAccount);






module.exports = router;