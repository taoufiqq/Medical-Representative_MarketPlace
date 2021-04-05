const express = require('express');
const router = express.Router();
const SuperAdminController = require('../controllers/superAdmin.controller');



router.post('/authentication',SuperAdminController.addSuperAdmin);
router.post('/login', SuperAdminController.loginSuperAdmin);
router.get('/logout', SuperAdminController.logout);
router.post('/addAdmin',SuperAdminController.addAdmin);
router.get('/getAllAdmins',SuperAdminController.getAllAdmins);
router.get('/getAllSellers',SuperAdminController.getAllSeller);
router.get('/getAllSuperAdmins',SuperAdminController.getAllSuperAdmins);
router.delete('/deleteAdmin/:id',SuperAdminController.deleteAdmin);
router.delete('/deleteSeller/:id',SuperAdminController.deleteSeller);
router.put('/updateAdmin/:id',SuperAdminController.updateAdmin);
router.get('/getAdminById/:id',SuperAdminController.getAdminById);
router.put('/updateSeller/:id',SuperAdminController.updateSeller);
router.get('/getSellerById/:id',SuperAdminController.getSellerById);

module.exports = router;


