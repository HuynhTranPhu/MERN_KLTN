import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { register } from '../../../actions/userAction';
import MessageBox from '../../Config/MessageBox';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import LoadingBackdrop from '../../Config/LoadingBackdrop';





function RegisterScreen(props){

    const { t } = useTranslation(['mainpages_register']);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;


    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    const [showRePassword, setShowRePassword] = useState(false);

    function toggleShowRePassword() {
        setShowRePassword(!showRePassword);
    }


    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
            toast.success(t('mainpages_register:success'));
        }
        return () => {
            //
        };
    }, [props.history, redirect, t, userInfo]);
    
    const submitHandler =(e)=>{
        e.preventDefault();
        if(name===""|| email===""||password===""||repassword===""){
            toast.error(t('mainpages_register:not_found'));
        }
        else{
            dispatch(register(name, email,password,repassword));
        }
        
    }
    return <div className="formContain">
            <LoadingBackdrop open={loading} />
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2 className="title">{t('mainpages_register:create_account')}</h2>
                    </li>
                    <li>
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </li>
                    <li>
                        <label htmlFor="name">
                        {t('mainpages_register:name')}
                        </label>
                        <input type="name" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="email">
                        Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>

                    </li>
                    <li>
                        <label htmlFor="password">{t('mainpages_register:password')}</label>
                        <div className="group__password-login">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password" 
                                name="password" 
                                onChange={(e)=> setPassword(e.target.value)}></input>
                            <span className="form__password-label" onClick={toggleShowPassword}>
                                <i className={clsx('fas fa-fw mr-1', showPassword ? 'fa-eye-slash' : 'fa-eye')} />
                            </span>
                        </div>
                        
                    </li>
                    <li>
                        <label htmlFor="rePassword">{t('mainpages_register:re_enter_password')}</label>
                        <div className="group__password-login">
                            <input 
                                type={showRePassword ? 'text' : 'password'} 
                                id="rePassword" 
                                name="rePassword"
                                onChange={(e)=> setRePassword(e.target.value)}></input>
                            <span className="form__password-label" onClick={toggleShowRePassword}>
                                <i className={clsx('fas fa-fw mr-1', showRePassword ? 'fa-eye-slash' : 'fa-eye')} />
                            </span>
                        </div>
                        
                    </li>
                    <li>
                        <button type="submit" className="button primary">
                        {t('mainpages_register:register')} 
                        </button>
                    </li>
                    <li>
                        <Link to="/login" className=" button primary text-center back">
                        {t('mainpages_register:back')}
                        </Link>
                    </li>
                
                </ul>
            </form> 
    </div>
}
export default RegisterScreen;