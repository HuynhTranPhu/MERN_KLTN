import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, saveShipping } from '../../actions/cartAction';
import CheckoutSteps from '../CheckOutStep/CheckoutSteps';
import TopBar from '../Common/TopBar/TopBar';
import NavBar from '../Common/NavBar/index';
import BottomBar from '../Common/BottomBar/index';
import FooterPage from '../Common/Footer/Footer';
import ScrollToTopBtn from '../Common/ScrollToTop/ScrollToTop';
import LoadingBackdrop from '../Config/LoadingBackdrop';
import { useTranslation } from 'react-i18next';
import allAddresses from '../../assets/address.json';
import { toast } from 'react-toastify';
import { detailsUser } from '../../actions/userAction';



function ShippingScreen(props){
    const { t } = useTranslation(['shipping']);
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo}= userLogin;
    
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loading} = userDetails;
    //console.log(user?.user?.address);

    if(!userInfo){
        props.history.push('/login');
    }
    //const [address, setAddress] = useState('');
    const [infoDetail, setInfoDetail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo.newUser._id));
    }, [dispatch, userInfo.newUser._id])

    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
   
    
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(saveShipping(user?.user?.address));
        props.history.push('/payment');
         
    }
    useEffect(() => {
        const getOneCity = allAddresses.find(item => {
            return city === item.Name
        })
        //getNameCity để lấy ID
        if (getOneCity) {
            //console.log(getOneCity.Districts);
            setDistricts(getOneCity.Districts)
        }
    }, [city])
    useEffect(() => {
        const getOneDistrict = districts.find(item => {
            return district === item.Name
        })
        if (getOneDistrict) {
            setWards(getOneDistrict.Wards)
        }
    }, [district, districts])
    const handleSave = () => {
        const viPhoneNumberRegex = /(09|03|07|08|05)([0-9]{8})/;
        if(name===''|| infoDetail===''|| city===''|| district===''|| ward==='' || phone===''){
            toast.error(t('shipping:add_error'))
        }else if (phone.trim().match(viPhoneNumberRegex)===null) {
            toast.error(t('shipping:phone_error'))
        } 
        else{
            dispatch(addAddress(userInfo.newUser._id,{name, infoDetail, city, district, ward, phone}));
            toast.success(t('shipping:add_success'))
        }
    }
    const handleChangeCity = (e) => {
        const { value } = e.target
        setCity(value)
        setDistricts([])
        setWards([])
    }
    const handleChangeDistrict = (e) => {
        const { value } = e.target
        setDistrict(value)
        setWards([])
    }
    const handleChangeWard = (e) => {
        const { value } = e.target
        setWard(value)
    }
    return <div>
            <TopBar/>
            <BottomBar></BottomBar>
            <NavBar/>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="formShipping">
                <form onSubmit={submitHandler}>
                    <ul className="form-container-shipping ">
                        <p>
                            <h2 className="text-center">{t('shipping:shipping')}</h2>
                        </p>
                        {user?.user?.address!==undefined ?
                            <div className="dp_shipping">
                                <div className="dp__name-phone">
                                    <p>
                                        <label htmlFor="name">
                                        {t('shipping:name')}:
                                        </label>
                                        <span>{user?.user?.address.name}</span>

                                    </p>
                                    <p>
                                        <label htmlFor="city">
                                        {t('shipping:city')}:
                                        </label>
                                        <span>{user?.user?.address.city}</span>
                                    </p>
                                    <p>
                                        <label htmlFor="ward">
                                        {t('shipping:ward')}:
                                        </label>
                                        <span>{user?.user?.address.ward}</span>

                                    </p>
                                
                                </div>
                            
                                <div className="dp__name-phone dp__phone">
                                    
                                    <p >
                                        <label htmlFor="phone">
                                        {t('shipping:number_phone')}:
                                        </label>
                                        <span>{user?.user?.address.phone}</span>

                                    </p>
                                    <p >
                                        <label htmlFor="district">
                                        {t('shipping:district')}:
                                        </label>
                                    
                                        <span>{user?.user?.address.district}</span>
                                    </p>
                                    <p >
                                        <label htmlFor="infoDetail">
                                        {t('shipping:address')}:
                                        </label>
                                        <span>{user?.user?.address.infoDetail}</span>

                                    </p>
                                    
                                </div>
                            </div> : <p  className="text-center " data-toggle="modal" 
                                        data-target="#exampleModalCenter">
                                        You don't have address .<b className="create__address"> Click here to create address </b>
                                    </p>
                        
                        }
                        
                        
                         
                        {/* Modal */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Shipping address</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <li>
                                        <label htmlFor="name">
                                        {t('shipping:name')}
                                        </label>
                                        <input placeholder= {t('shipping:ph_name')}  type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>

                                    </li>
                                    
                                    <li>
                                        <label htmlFor="phone">
                                        {t('shipping:number_phone')}
                                        </label>
                                        <input placeholder= {t('shipping:ph_phone')}  type="text" name="phone" id="phone" onChange={(e)=>setPhone(e.target.value)}></input>

                                    </li>
                                    
                                    <li>
                                        <label htmlFor="city">
                                        {t('shipping:city')}
                                        </label>
                                        <select className="form-control" name='city' onChange={handleChangeCity}>
                                            <option >{t('shipping:select_city')}</option>
                                            {
                                                allAddresses.map((city) => {
                                                    return <option key={city.Id} id={city.id}> {city.Name}</option>
                                                })
                                            }
                                        </select>
                                    </li>

                                    <li>
                                        <label htmlFor="district">
                                        {t('shipping:district')}
                                        </label>
                                    
                                        <select  className="form-control" name='district' onChange={handleChangeDistrict}>
                                            <option >{t('shipping:select_district')}</option>
                                            {
                                                districts.map((district) => {
                                                    return <option key={district.Id} id={district.Id}> {district.Name}</option>
                                                })
                                            }
                                        </select>
                                        

                                    </li>
                                    <li>
                                        <label htmlFor="ward">
                                        {t('shipping:ward')}
                                        </label>
                                        <select className="form-control" name='ward' onChange={handleChangeWard}>
                                            <option >{t('shipping:select_ward')}</option>
                                            {
                                                wards.map((ward) => {
                                                    return <option key={ward.Id} id={ward.Id}> {ward.Name}</option>
                                                })
                                            }
                                        </select>

                                    </li>
                                    <li>
                                        <label htmlFor="infoDetail">
                                        {t('shipping:address')}
                                        </label>
                                        <input placeholder= {t('shipping:ph_infoDetail')}  type="text" name="infoDetail" id="infoDetail" onChange={(e)=>setInfoDetail(e.target.value)}></input>

                                    </li>
                                       
                                </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSave}>Save changes</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                             {/* Button trigger modal */}
                            <div className="form__shipping-btn">
                                <button type="submit" className="">
                                    {t('shipping:continue')} 
                                </button>
                                {
                                    user?.user?.address !== undefined ?
                                    <p className="" data-toggle="modal" data-target="#exampleModalCenter">
                                        Change address
                                    </p>: null
                                }
                               
                                
                            </div>
                            
                       
                    
                    </ul>
            </form> 
        </div>
        <LoadingBackdrop open={loading}/>
        <FooterPage/>
        <ScrollToTopBtn />
    </div> 
   
}
export default ShippingScreen;