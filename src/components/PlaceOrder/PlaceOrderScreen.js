import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';
import { addOrder } from '../../actions/orderActions';
import { ORDER_RESET } from '../../constants/orderContants';
import PayPalButton from './PayPalButton';
import { useTranslation } from 'react-i18next';
function PlaceOrderScreen(props){

    const { t } = useTranslation(['place_order']);
    const cart = useSelector(state => state.cart);
    const { payment} = cart;
    const cartGet = useSelector(state => state.cartGet);
    const {cartItems, loading} = cartGet;
    const addOrderPost = useSelector(state => state.orderPost);
    const { success} = addOrderPost;
    
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    if(!payment.paymentMethod){
        
        props.history.push('/payment'); 
    }
    

    const toPrice = (num) => Number(num.toFixed(2));
    const itemsPrice = toPrice(
        cartItems.reduce((a,c)=> a + c.price * c.quantity,0)
    ); 
    const shippingPrice = itemsPrice > 100||itemsPrice===0 ? toPrice(0) : toPrice(10);
    const totalPrice = itemsPrice + shippingPrice ;
    //const paymentStatus= "pending";
    console.log(cart.payment.paymentMethod);
    const dispatch = useDispatch();
    const placeOrderHandler = () =>{
        ///create order
        dispatch(addOrder(userInfo.newUser._id,cart.shipping.city,
            cart.shipping.name,cart.shipping.address,
            cart.shipping.numberPhone,cart.payment.paymentMethod, shippingPrice.toFixed(2)));
    }
    const tranSuccess = async(payment) => {
        if(payment.paid===true){
            dispatch(addOrder(userInfo.newUser._id,cart.shipping.city,
                cart.shipping.name,cart.shipping.address,
                cart.shipping.numberPhone,cart.payment.paymentMethod, shippingPrice.toFixed(2)));
        } 
    }
    useEffect(()=>{
        if(success){
            props.history.push('/order-success');
            dispatch({type:ORDER_RESET});
        }
        console.log(cart.payment.paymentMethod);
    },[dispatch,props.history,success]);
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>
                        {t('place_order:shipping_address')}
                    </h3>
                    <div>
                        {cart.shipping.address},{cart.shipping.city},
                        {cart.shipping.name},{cart.shipping.numberPhone}
                    </div>
                </div>
                <div>
                    <h3>
                    {t('place_order:payment')}
                    </h3>
                    <div>
                    {t('place_order:payment_method')} {cart.payment.paymentMethod}
                    </div>
                </div>
                    <div className="cart-page">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="cart-page-inner">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="thead-dark"> 
                                                        <tr>
                                                            <th>{t('place_order:product')}</th>
                                                            <th>{t('place_order:price')}</th>
                                                            <th>{t('place_order:quantity')}</th>
                                                            <th>{t('place_order:total')}</th>
                                                            
                                                        </tr>    
                                                </thead>
                                                <tbody className="align-middle">
                                                    {
                                                        cartItems.map(item=>
                                                        <tr key={item._id}>
                                                            <td>
                                                                <div className="img">
                                                                    <Link to={"/product/"+item.product}>
                                                                        <img src={item.img} alt="Product" />
                                                                        </Link>
                                                                    <p><Link to ={"/product/" +item.product}> {item.name}</Link></p>
                                                                </div>
                                                            </td>
                                                            <td>${item.price}</td>
                                                            <td>
                                                                <div className="qty">
                                                                    
                                                                    <input type="text"
                                                                    value={item.quantity}  />
                                                                    
                                                                </div>
                                                            </td>
                                                            <td>${item.price * item.quantity}</td>
                                                           
                                                        </tr>)
                                                    }    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="placeorder-action">
                <ul>
                    <li>
                        <h3><b>{t('place_order:order_summary')}</b></h3>
                    </li>
                    <li>
                        
                            <div>
                            {t('place_order:sub_total')}
                            </div>
                            <div>
                                ${itemsPrice.toFixed(2)}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                            <div>
                            {t('place_order:shipping')}
                            </div>
                            <div>
                                ${shippingPrice.toFixed(2)}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                        <div>
                        {t('place_order:total_price')}
                        </div>
                        <div>
                            ${totalPrice.toFixed(2)}
                        </div>
                    </li>
                   
                    {
                        cart.payment.paymentMethod==="Paypal"?
                        <li className="payPal">
                                <PayPalButton   
                                total={totalPrice.toFixed(2)}
                                tranSuccess={tranSuccess}/>
                        </li>:
                         <li>
                         <button className="checkout-btn" disabled={cartItems.length===0} 
                         onClick={placeOrderHandler}>{t('place_order:place_order')}</button>
                         
                        </li>
                    }
                    
                </ul>   
            </div>
        </div>
        <FooterPage/>
        <ScrollToTopBtn />
        
    </div>
    
   
}
export default PlaceOrderScreen