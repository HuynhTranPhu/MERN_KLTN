import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';
import Axios from 'axios';
import { useTranslation } from 'react-i18next';
import useAddress from'../../components/hooks/useAddress';
import { toast } from 'react-toastify';



function ShippingScreen(props){
    const { t } = useTranslation(['shipping']);
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo}= userLogin;
    // const cart = useSelector((state) => state.cart);
    // const {shipping}= cart;
    if(!userInfo){
        props.history.push('/login');
    }
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [name, setName] = useState(userInfo.newUser.name);
    const [numberPhone, setNumberPhone] = useState('');
    
    const dispatch = useDispatch();
    // const [city] = useAddress();
    // console.log(city)
   
    
    const submitHandler =(e)=>{
        e.preventDefault();
        if(name ===''||address===''||city===''||numberPhone===''){
            toast.error("Information not found")
        }else{
            dispatch(saveShipping({name, address, city, numberPhone}));
            props.history.push('payment');
        }
        
        
        
    }
    // useEffect(() => {
    //     const {data} = Axios.get('https://thongtindoanhnghiep.co/api/city');
    //     setAddress(data.LtsItem.Title);
    //     console.log(data);
    //     return () => {
    //     };
    // }, [])
    
    return <div>
            <TopBar/>
            <BottomBar></BottomBar>
            <NavBar/>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="formShipping">
                <form onSubmit={submitHandler}>
                <ul className="form-container-shipping">
                    <li>
                        <h2>{t('shipping:shipping')}</h2>
                    </li>
                    <li>
                        <label htmlFor="name">
                        {t('shipping:name')}
                        </label>
                        <input defaultValue={userInfo.newUser.name} type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>

                    </li>
                    
                    <li>
                        <label htmlFor="numberPhone">
                        {t('shipping:number_phone')}
                        </label>
                        <input type="text" name="numberPhone" id="numberPhone" onChange={(e)=>setNumberPhone(e.target.value)}></input>

                    </li>
                    
                    <li>
                        <label htmlFor="address">
                        {t('shipping:address')}
                        </label>
                        <input type="text" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="city">
                        {t('shipping:city')}
                        </label>
                        <input type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)}></input>

                    </li>
                    <li>
                        <button type="submit" className="button primary">
                        {t('shipping:continue')} 
                        </button>
                    </li>
                
                </ul>
            </form> 
        </div>
        <FooterPage/>
        <ScrollToTopBtn />
    </div> 
   
}
export default ShippingScreen;