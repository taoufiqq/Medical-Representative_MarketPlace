import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import LoginSuperAdmin from '../SuperAdmin/login'
import DashboardSuperAdmin from '../SuperAdmin/Dashbord'
import AddAdmin from '../SuperAdmin/AddAdmin'
import Admin from '../SuperAdmin/Admin'
import LoginAdmin from '../Admin/LoginAdmin'
import LoginSeller from '../Seller/LoginSeller'
import DashboardAdmin from '../Admin/DashboardAdmin'
import DashboardSeller from '../Seller/DashboardSeller'
import AddProduct from '../Seller/AddProduct'
import ListProducts from '../Seller/ListProducts'
import EditAdmin from '../SuperAdmin/EditAdmin'
import SignIn from '../Seller/Sign_in'
import Seller from '../SuperAdmin/Seller'
import ConfirmSeller from '../SuperAdmin/ConfirmSeller'
import Home from '../Home/Home'
import Compte from '../Home/Compte'
import ChoiceLogin from '../Home/ChoiceLogin'
import DetailsProduct from '../Home/DetailsProduct'


function Routes () { 
    return (
        <BrowserRouter>
        <Switch>  
            <Route path="/login" exact component={LoginSuperAdmin} />
            <Route path="/loginAdmin" exact component={LoginAdmin} />
            <Route path="/loginSeller" exact component={LoginSeller} />
            <Route path="/signIn" exact component={SignIn} />
            <PrivateRoute  path="/superAdmin" exact component={DashboardSuperAdmin} />
            <PrivateRoute  path="/addAdmin" exact component={AddAdmin} />
            <PrivateRoute  path="/editAdmin" exact component={EditAdmin} />
            <PrivateRoute  path="/adminDashboard" exact component={DashboardAdmin} />
            <PrivateRoute  path="/sellerDashboard" exact component={DashboardSeller} />
            <PrivateRoute  path="/seller" exact component={Seller} />
            <PrivateRoute  path="/addProduct" exact component={AddProduct} />
            <PrivateRoute  path="/listProduct" exact component={ListProducts} />
            <PrivateRoute  path="/admin" exact component={Admin} />
            <PrivateRoute  path="/confirmSeller" exact component={ConfirmSeller} />
            <PrivateRoute  path="/detailsProduct" exact component={DetailsProduct} />
            <Route path="/" exact component={Home} />
            <Route path="/compte" exact component={Compte} />
            <Route path="/choiceLogin" exact component={ChoiceLogin} />
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;