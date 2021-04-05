const express = require('express');
const router = express.Router();
const SellerController = require('../controllers/Seller.controller');


router.post('/authentication', SellerController.addSeller)
router.post('/login', SellerController.loginSeller);
router.post('/addProduct', SellerController.addProduct);
router.get('/getAllProduct', SellerController.getAllProduct);
router.delete('/deleteProduct/:id', SellerController.deleteProduct);
router.put('/updateProduct/:id', SellerController.updateProduct);
router.get('/getProductById/:id', SellerController.getProductById);




module.exports = router;
