const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/Customer.controller');


router.post('/authentication', CustomerController.addCustomer)
router.put('/activateCompte/:token', CustomerController.activateCompteCustomer)
router.post('/loginCustomer', CustomerController.loginCustomer)
router.get('/logout', CustomerController.logout);




module.exports = router;