import React from 'react';
import {
  BrowserRouter ,
  Route,
  Switch
} from "react-router-dom";

 import HomeScreen from './components/MainPages/HomePage/HomeScreen';
// import ProductScreen from './components/screens/ProductScreen';
 import CartScreen from './components/MainPages/Cart/CartScreen';
 import LoginScreen from './components/MainPages/Login/LoginScreen';

 import RegisterScreen from './components/MainPages/Register/RegisterScreen';

import ShippingScreen from './components/Shipping/ShippingScreen';
import PaymentScreen from './components/Payment/PaymentScreen';
import PlaceOrderScreen from './components/PlaceOrder/PlaceOrderScreen';
import ProfileScreen from './components/MainPages/ProfileUser/ProfileScreen';
import ProductScreen from './components/MainPages/Products/ProductScreen';
import ProductDetailScreen from './components/MainPages/ProductDetails/ProductDetails';
import ContactScreen from './components/Contact/Contact';

import NotFound from './components/404/404';
import VerifyRegisterAccountContainer from './components/MainPages/ConfirmAcount/ConfirmAcount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdatePasswordScreen from './components/MainPages/UpdatePassword/UpdatePassword';
import ForgotPasswordContainer from './components/MainPages/ForgotPassword/ForgotPasswordContainer';

import OrderSuccess from './components/MainPages/OrderSuccess/OrderSuccess';
import History from './components/MainPages/History/index';
import ViewHistory from './components/MainPages/ViewHistory';
import SearchScreen from './components/MainPages/SearchHeader';
import Size from './components/Common/Size-chart';
import PromotionCode from './components/Common/Promotion-Code';
import PromotionProducts from './components/Common/Promotion-Products';
import CategoryUpdating from './components/MainPages/HomePage/CategoryUpdating';

import MessengerCustomerChat from 'react-messenger-customer-chat';
require ('dotenv').config();
const pageId = process.env.REACT_APP_PAGE_ID ;
const appId = process.env.REACT_APP_FACEBOOK_CLIENT;

function App() {
  
   
  return (
    <BrowserRouter>
                  <Switch>
                     <Route path="/" exact component={HomeScreen}></Route> 
                     <PrivateRoute path="/cart/:id?" exact component={CartScreen}></PrivateRoute>
                     <Route path="/login" exact component={LoginScreen}></Route>
                     <Route path="/register" exact component={RegisterScreen}></Route>
                     <PrivateRoute path="/profile" exact component={ProfileScreen}></PrivateRoute>
                     <Route path="/product-list" exact component={ProductScreen}></Route>
                     <PrivateRoute path="/update-password" exact component={UpdatePasswordScreen}></PrivateRoute>
                     <Route path="/product-detail/:id" exact component={ProductDetailScreen}></Route>
                     <Route path="/contact" exact component={ContactScreen}></Route>
                     <Route path="/confirm/:token" exact component={VerifyRegisterAccountContainer}></Route>
                     <Route path="/forgotPass" exact component={ForgotPasswordContainer}></Route>
                     <PrivateRoute path="/shipping" exact component={ShippingScreen}></PrivateRoute>
                     <PrivateRoute path="/payment" exact component={PaymentScreen}></PrivateRoute>
                     <PrivateRoute path="/place-order" exact component={PlaceOrderScreen}></PrivateRoute>
                     <PrivateRoute path="/order-success" exact component={OrderSuccess}></PrivateRoute>
                     <PrivateRoute path="/history" exact component={History}></PrivateRoute>
                     <PrivateRoute path="/view-history/:id" exact component={ViewHistory}></PrivateRoute>
                     <Route path="/size-chart" exact component={Size}></Route>
                     <Route path="/promo-codes" exact component={PromotionCode}></Route>
                     <Route path="/promotions" exact component={PromotionProducts}></Route>
                     <Route path="/search" exact component={SearchScreen}></Route>
                     <Route path="/updating" exact component={CategoryUpdating}></Route>
                     <Route path="*" exact component={NotFound}></Route>
                  </Switch>   
                  <MessengerCustomerChat
                    pageId={pageId}
                    appId={appId}
                  />
    </BrowserRouter>
    
  );
}

export default App;
