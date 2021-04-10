import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import PrivateRouteCustomer from '../auth/PrivateRouteClient';

// import Components SuperAdmin
import LoginSuperAdmin from '../SuperAdmin/login'
import DashboardSuperAdmin from '../SuperAdmin/Dashbord'
import ConfirmSeller from '../SuperAdmin/ConfirmSeller'
import AddAdmin from '../SuperAdmin/AddAdmin'
import Admin from '../SuperAdmin/Admin'
import Seller from '../SuperAdmin/Seller'
import EditAdmin from '../SuperAdmin/EditAdmin'
// import Components Admin
import LoginAdmin from '../Admin/LoginAdmin'
import DashboardAdmin from '../Admin/DashboardAdmin'
import ListOrder from '../Admin/ListOrder';
import DeliveryMan from '../Admin/DeliveryMan';
import AddDeliveryMan from '../Admin/AddDeliveryMan';
import EditDeliveryMan from '../Admin/EditDeliveryMan';

// import Components Seller
import DashboardSeller from '../Seller/DashboardSeller'
import AddProduct from '../Seller/AddProduct'
import ListProducts from '../Seller/ListProducts'
import LoginSeller from '../Seller/LoginSeller'
import SignIn from '../Seller/Sign_in'
import BuyPack from '../Seller/BuyPack';
// import Components Home & Products
import Home from '../Home/Home'
import Compte from '../Home/Compte'
import ChoiceLogin from '../Home/ChoiceLogin'
import DetailsProduct from '../Home/DetailsProduct'
import EditProduct from '../Seller/EditProduct';
// import Components Customer
import SignInCustomer from '../Customer/SignInCustomer'
import LoginCustomer from '../Customer/LoginCustomer'
import ValidateAccount from '../Customer/ValidateAccount'
import AcceuilCustomer from '../Customer/AcceuilCustomer'
import SearchProductByCategory from '../Home/SearchProductByCategory';







function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes SuperAdmin  */}

            <Route path="/login" exact component={LoginSuperAdmin} />
            <PrivateRoute  path="/superAdmin" exact component={DashboardSuperAdmin} />
            <PrivateRoute  path="/confirmSeller" exact component={ConfirmSeller} />
            <PrivateRoute  path="/admin" exact component={Admin} />
            <PrivateRoute  path="/addAdmin" exact component={AddAdmin} />
            <PrivateRoute  path="/editAdmin" exact component={EditAdmin} />
            <PrivateRoute  path="/seller" exact component={Seller} />

     {/* Routes Admin  */}

            <Route path="/loginAdmin" exact component={LoginAdmin} />
            <PrivateRoute  path="/adminDashboard" exact component={DashboardAdmin} />
            <PrivateRoute  path="/listOrder" exact component={ListOrder} />
            <PrivateRoute  path="/deliveryMan" exact component={DeliveryMan} />
            <PrivateRoute  path="/addDeliveryMan" exact component={AddDeliveryMan} />
            <PrivateRoute  path="/editDeliveryMan" exact component={EditDeliveryMan} />


     {/* Routes Seller  */}

            <Route path="/signIn" exact component={SignIn} />
            <Route path="/loginSeller" exact component={LoginSeller} />            
            <PrivateRoute  path="/sellerDashboard" exact component={DashboardSeller} />
            <PrivateRoute  path="/addProduct" exact component={AddProduct} />
            <PrivateRoute  path="/listProduct" exact component={ListProducts} />
            <PrivateRoute  path="/editProduct" exact component={EditProduct}/>
            <PrivateRoute  path="/buyPack" exact component={BuyPack}/>

    {/* Routes Home & Products  */} 

            <Route path="/" exact component={Home} />
            <Route path="/productByCategory/:category" exact component={SearchProductByCategory} />
            <Route path="/compte" exact component={Compte} />
            <Route path="/choiceLogin" exact component={ChoiceLogin} />           
            <PrivateRouteCustomer  path="/detailsProduct" exact component={DetailsProduct} />

    {/* Routes Customer  */}

            <Route path="/signInCustomer" exact component={SignInCustomer} />
            <Route path="/loginCustomer" exact component={LoginCustomer} />            
            <Route path="/Customer/activateCompte/:token" exact component={ValidateAccount} /> 
            <PrivateRouteCustomer path="/acceuil" exact component={AcceuilCustomer} />   

        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;