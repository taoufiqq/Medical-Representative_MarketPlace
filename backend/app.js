const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



const port = process.env.PORT || 3030;
const logger = require('./config/logger')


app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(bodyParser.json());




mongoose.connect('mongodb://localhost:27017/MarketPlace' , {
  useNewUrlParser: true
}).then(() => {
  logger.info("Successfully connected to the database");    
}).catch(err => {
  logWinston.error('Could not connect to the database. Exiting now...', err);
  logger.exit();
});















// _______________import router_______________ 
const SuperAdminRoutes = require("./routes/superAdmin.router");
const AdminRoutes = require("./routes/Admin.router");
const SellerRoutes = require("./routes/Seller.router");
const CustomerRoutes = require("./routes/Customer.router");
const ProductRoutes = require("./routes/Product.router");
const ChekoutRoutes = require("./routes/Checkout.router")
const BuyAccountRoutes = require("./routes/BuyAccount.router")

app.use('/superAdmin',SuperAdminRoutes);
app.use('/Admin',AdminRoutes);
app.use('/Seller',SellerRoutes);
app.use('/Customer',CustomerRoutes);
app.use('/Product',ProductRoutes);
app.use('/Checkout', ChekoutRoutes);
app.use('/BuyAccount', BuyAccountRoutes);












module.exports =app;


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  }) 