const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/Admin.controller');


router.get('/admin', AdminController.getAllAdmins)
router.post('/login', AdminController.loginAdmin);
router.post('/addDelivery', AdminController.addDelivery);
router.get('/getDeliveryById/:id', AdminController.getDeliveryById);
router.get('/getAllDelivery', AdminController.getAllDelivery)
router.put('/updateDelivery/:id', AdminController.updateDelivery);
router.delete('/deleteDelivery/:id', AdminController.deleteDelivery);
router.put('/validateOrder/:id', AdminController.validateOrder);
router.get('/getAllOrder', AdminController.getAllOrder);
router.get('/getOrderById/:id',AdminController.getOrderById);
router.delete('/deleteOrder/:id', AdminController.deleteOrder);
router.get('/logout', AdminController.logout);




module.exports = router;
