import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../../actions/userAction';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstant';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
//import LoadingBox from '../../Config/LoadingBox';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import MessageBox from '../../Config/MessageBox';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
export default function ProfileScreen(props){
    const { t } = useTranslation(['mainpages_profile_user']);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    //console.log(userInfo);
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { error: errorUpdate }= userUpdateProfile;
    const dispatch = useDispatch();
   
    useEffect(() =>{
        if(!user){
            dispatch({type:USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo.newUser._id));     
        }else{
            setName(user.user.name);
            setEmail(user.user.email);
        }
        
       
    },[dispatch, userInfo.newUser._id, user]);

    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update 
        if(email==="" || name===""){
            toast.error('Email or name are not valid');
        }else{
            toast.success("Profile updated success")
            dispatch(updateUserProfile(  email, name, userInfo.newUser._id));
        }
           
    }
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        {
             loading ? (
                 <>
                <LoadingBackdrop open={loading}/>
                 <div  style={{height:"350px"}}></div>
                 </>
                )
                : error? (<MessageBox variant="danger">{error}</MessageBox>
                ) :(
                    <form className="form-profile" onSubmit={submitHandler}>
                        <div>
                            <h1 className="title">
                            {t('mainpages_profile_user:user_profile')}
                            </h1>
                        </div>
                            <>
                            {errorUpdate && toast.error(errorUpdate)}
                                <div>
                                    <label htmlFor="name">{t('mainpages_profile_user:name')}</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter name"
                                        value ={name}
                                        onChange={(e) =>setName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value ={email}
                                        onChange={(e) =>setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label> </label>
                                    <button className="button primary update-profile" type="submit">
                                    {t('mainpages_profile_user:update')}
                                    </button>
                                </div>
                            </>
                    </form>
                )
        }
       <FooterPage/>
       <ScrollToTopBtn />
    </div>;  
}