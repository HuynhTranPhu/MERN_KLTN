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
import './Payment.css';



function PaymentScreen(props){

    const { t } = useTranslation(['payment']);
    const cartGet = useSelector((state)=>state.cartGet);
    const {shipping}= cartGet;
    if(!shipping?.infoDetail){
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
            <div className="formPayment">
                <form onSubmit={submitHandler}>
                <ul className="form-container-payment">
                    <li>
                        <h2 className="text-center" >{t('payment:payment')}</h2>
                    </li>
                    <li>
                        <div className="payment__method">
                            <input type="radio" name="paymentMethod" value="Paypal"
                                    id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                PayPal
                            </label>
                        </div>
                        
                    </li>
                    <li>
                        <div className="payment__method">
                            <input type="radio" name="paymentMethod" value="Cash On Delivery"
                                    id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                            <label htmlFor="paymentMethod">
                                {t('payment:payment_on_delivery')}
                            </label>
                        </div>
                        
                    </li>
                    
                    <li>
                        <button type="submit" className="button primary ">
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