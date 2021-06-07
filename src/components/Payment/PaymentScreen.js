import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';




function PaymentScreen(props){

    const { t } = useTranslation(['payment']);
    const cart = useSelector((state)=>state.cart);
    const {shipping}= cart;
    if(!shipping.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        if(paymentMethod===""){
            toast.error('Payment method not found');
        }else{
            dispatch(savePayment({paymentMethod}));
            props.history.push('/place-order');
        }
        
    }

    return <div>
            <TopBar/>
            <BottomBar></BottomBar>
            <NavBar/>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="formShipping">
                <form onSubmit={submitHandler}>
                <ul className="form-container-shipping">
                    <li>
                        <h2>{t('payment:payment')}</h2>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="Paypal"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                PayPal
                            </label>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="Momo"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                MoMo
                            </label>
                    </li>
                    <li>
                        <input type="radio" name="paymentMethod" value="Cash On Delivery"
                        id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                {t('payment:payment_on_delivery')}
                            </label>
                    </li>
                    
                    <li>
                        <button type="submit" className="button primary">
                                {t('payment:continue')}
                        </button>
                    </li>
                
                </ul>
            </form> 
        </div>
        <FooterPage/>
        <ScrollToTopBtn />
    </div> 
   
}
export default PaymentScreen;