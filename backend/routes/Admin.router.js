const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/Admin.controller');


router.get('/admin', AdminController.getAllAdmins)
router.post('/login', AdminController.loginAdmin);
router.post('/addDelivery', AdminController.addDelivery);
router.get('/getDeliveryById/:id', AdminController.getDeliveryById);
router.put('/updateDelivery/:id', AdminController.updateDelivery);
router.delete('/deleteDelivery', AdminController.deleteDelivery);




module.exports = router;
