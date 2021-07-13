import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword } from '../../../actions/userAction';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import MessageBox from '../../Config/MessageBox';
import './UpdatePassword.css';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export default function UpdatePasswordScreen(){
    const { t } = useTranslation(['mainpages_updatepassword']);
    const [oldpassword,setOldPassword] = useState('');
    const [newpassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
   
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    const [showNewPassword, setShowNewPassword] = useState(false);

    function toggleShowNewPassword() {
        setShowNewPassword(!showNewPassword);
    }
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function toggleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
    const { error: errorUpdate, success}= userUpdatePassword;
    const dispatch = useDispatch();
   
    useEffect(() =>{
           // dispatch({type:USER_UPDATE_PASSWORD_RESET});
    },[]);
    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update
        if(newpassword===""|| confirmPassword===""){
            toast.error(t('mainpages_updatepassword:password_not_valid'));
        }
        else if(newpassword !== confirmPassword){
            toast.error(t('mainpages_updatepassword:password_match'));
        }else{
            dispatch(updateUserPassword( oldpassword, newpassword, userInfo?.newUser?._id));

        }
    }
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        <form className="form__change-password" onSubmit={submitHandler}>
            <div>
                <h1 className="title">
                {t('mainpages_updatepassword:change_password')}
                </h1>
            </div>
            {
                    <>
                        {errorUpdate &&<MessageBox variant="danger">{errorUpdate}</MessageBox>}
                        {success &&<MessageBox variant="success">{t('mainpages_updatepassword:update_success')}</MessageBox>}
                        <div>
                            <label htmlFor="password"> {t('mainpages_updatepassword:password')}</label>
                            <div className="group__password">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder= {t('mainpages_updatepassword:password_place')}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                ></input>
                                <span className="form__password-label" onClick={toggleShowPassword}>
                                        <i className={clsx('fas fa-fw mr-1', showPassword ? 'fa-eye-slash' : 'fa-eye')} />
                                </span>
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="newPassword"> {t('mainpages_updatepassword:new_password')}</label>
                            <div className="group__password">
                                <input
                                    id="newPassword"
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder={t('mainpages_updatepassword:new_pass_place')}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                ></input>
                                <span className="form__password-label" onClick={toggleShowNewPassword}>
                                        <i className={clsx('fas fa-fw mr-1', showNewPassword ? 'fa-eye-slash' : 'fa-eye')} />
                                </span>
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="confirmPassword"> {t('mainpages_updatepassword:confirm_password')}</label>
                            <div className="group__password">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder={t('mainpages_updatepassword:confirm_password_place')}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></input>
                                <span className="form__password-label" onClick={toggleShowConfirmPassword}>
                                            <i className={clsx('fas fa-fw mr-1', showConfirmPassword ? 'fa-eye-slash' : 'fa-eye')} />
                                </span>
                            </div>
                           
                        </div>
                        <div>
                            <label> </label>
                            <button className="button primary update-password" type="submit" >
                            {t('mainpages_updatepassword:update')}
                            </button>
                        </div>
                    </>
            }
        </form>
        <FooterPage/>
       <ScrollToTopBtn />
    </div>;  
}