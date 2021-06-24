import React, { useEffect, useState } from 'react';
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
import PromoCodes from './Apply-Promotion-Code/PromoCodes';
import {  getPromoCode } from '../../actions/promotionAction';
import LoadingBackdrop from '../Config/LoadingBackdrop';
import { toast } from 'react-toastify';

function PlaceOrderScreen(props){

    const { t } = useTranslation(['place_order']);
    
    const cartGet = useSelector(state => state.cartGet);
    const {cartItems, payment, shipping} = cartGet;

    //console.log(cartGet);
    const addOrderPost = useSelector(state => state.orderPost);
    const { success} = addOrderPost;
    
    const getPromoCodes = useSelector(state => state.getPromoCodes);
    const {promoCodes} = getPromoCodes;

    const [discount,setDiscount]= useState(0);
    const [input,setInput]= useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPromoCode());
        return () => {
        };
    }, [dispatch])
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    if(!payment?.paymentMethod){
        
        props.history.push('/payment'); 
    }
    const checkPromotion = useSelector(state => state.checkPromotion);
    const { checkPromotions,loading } = checkPromotion;

    //  useEffect(() => {
    //   dispatch(checkPromotionCode(userInfo.newUser._id,input));  
    // },[input, dispatch, userInfo.newUser._id])
    const toPrice = (num) => Number(num.toFixed(2));
    let itemsPrice = toPrice(
        cartItems.reduce((a,c)=> a + c.price * c.quantity,0)
    );
    //let itemsPricePromotion = 0 ;
    const priceDecreaseHandle = (element,checkCode) => {
        promoCodes.map((item)=>{
            return  item.promotion_code === element
            ? setDiscount(item.price_discount): null
        } )
        setInput(checkCode);
         
    } 
    
    
    const shippingPrice = itemsPrice > 100||itemsPrice===0 ? toPrice(0) : toPrice(10);
    const PromotionPrice = discount===0 ? toPrice(0) : toPrice(discount);
    const totalPrice = itemsPrice + shippingPrice - PromotionPrice ;
    
    const addAddress = shipping.district +', '+ shipping.ward + ', ' +shipping.infoDetail
    
    
    const placeOrderHandler = () =>{
        if(checkPromotions===true){
            ///create order
            dispatch(addOrder(
                userInfo.newUser._id,
                input,
                shipping.city,
                shipping.name,addAddress,
                shipping.phone,payment.paymentMethod, 
                shippingPrice.toFixed(2), 
                totalPrice.toFixed(2)));
        }else{
            toast.error("Mã giảm giá chỉ được dùng cho 1 đơn hàng")
        }
        
    }
    const tranSuccess = async(pay) => {
        if(pay.paid===true && checkPromotions===true){
            dispatch(addOrder(
               userInfo.newUser._id,
               input,
               shipping.city,
               shipping.name,addAddress,
               shipping.phone,
               payment.paymentMethod, 
               shippingPrice.toFixed(2),
               totalPrice.toFixed(2)));
        }else{
            toast.error("Mã giảm giá chỉ được dùng cho 1 đơn hàng")
        }
    }
    useEffect(()=>{
        if(success){
            props.history.push('/order-success');
            dispatch({type:ORDER_RESET});
        }
        //console.log(payment.paymentMethod);
    },[dispatch,props.history,success]);
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h4>
                        <b>{t('place_order:shipping_address')}</b>
                    </h4>
                    <div>
                        {shipping?.city},{shipping?.district},{shipping?.ward},{shipping?.infoDetail}
                     
                    </div>
                </div>
                <div>
                    <h4>
                        <b>{t('place_order:shipping_user')}</b>
                    </h4>
                    <div>
                        {shipping?.name},{shipping?.phone}
                    </div>
                </div>
                <div>
                    <h4>
                     <b> {t('place_order:payment')}</b>
                    </h4>
                    <div>
                    {t('place_order:payment_method')} 
                    {payment?.paymentMethod}
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
                                                            <th>{t('place_order:color')}</th>
                                                            <th>{t('place_order:size')}</th>
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
                                                            <td>{item.color.name}</td>
                                                            <td>{item.size.name}</td>
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
                        <h3><b>{t('place_order:promotion_code')}</b></h3>
                    </li>
                    <li>
                        <PromoCodes priceDecreaseHandle={priceDecreaseHandle} />
                        
                        
                    </li>
                    <li>
                            <div>
                            {t('place_order:promotion')}
                            </div>
                            <div>
                               - ${discount.toFixed(2)}
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
                       payment?.paymentMethod==="Paypal"?
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
        <LoadingBackdrop open={loading}/>   
        <FooterPage/>
        <ScrollToTopBtn />
        
    </div>
    
   
}
export default PlaceOrderScreen