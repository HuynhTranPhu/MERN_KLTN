import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginFaceBook, loginGoogle } from '../../../actions/userAction';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
//import config from '../../Config/index';
require ('dotenv').config();
//file config
const gg = process.env.REACT_APP_GOOGLE_CLIENT
const fb = process.env.REACT_APP_FACEBOOK_CLIENT
//console.log(gg);





function LoginScreen(props){
    const { t } = useTranslation(['mainpages_login']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(state => state.userLogin);
    const {loading, userInfo, error} = userLogin;
    
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
            toast.success(t('mainpages_login:login_success'));
        }
        if(error){
            toast.error(error);
        }
        return () => {
            //
        };
    }, [error, props.history, redirect, t, userInfo]);
    
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    
    //Nhan respone tu gg
      const responseGoogle = response => {
        //console.log(response);
        dispatch(loginGoogle(response.tokenId));
      };
     
      const responseFacebook = response => {
        //console.log(response);
        dispatch(loginFaceBook(response.userID, response.accessToken)); 
      };
    
    return <div>
        <LoadingBackdrop open={loading} />
        <div className="formContain">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            
                            <li>
                                <h2 className="title">{t('mainpages_login:welcome')}</h2>
                            </li>
                            <li>
                                <Link className="logo__login text-center title" to="/">
                                    <img src="/img/logo.png" alt="Logo"/>
                                </Link>
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>

                            </li>
                            <li>
                                <label htmlFor="password">{t('mainpages_login:password')}</label>
                                <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}></input>
                            </li>
                            <li>
                                <button type="submit" className="button primary">
                                {t('mainpages_login:login')}
                                </button>
                            </li>
                            <li>
                            <Link to="/forgotPass/" className="forgot">{t('mainpages_login:forgotten_password')}</Link> 
                            </li>
                            <li className="sign-up">
                                <p>
                                    {t('mainpages_login:don_have an account')}
                                    <Link to={redirect === "/" ? "register": "register? redirect=" + redirect} className="borders" >
                                    {t('mainpages_login:sign_up')}
                                    </Link>
                                </p>
                                
                            </li>
                        
                            <li className="facebook">
                                <p>
                                {t('mainpages_login:login_with')}
                                    <FacebookLogin
                                    appId={fb}
                                    autoLoad={false}
                                    callback={responseFacebook}
                                    render={renderProps => (
                                        <b 
                                        onClick={renderProps.onClick}
                                        >
                                        {/* <div className=' p-2 rounded-full '> */}
                                        
                                        <img className="img-fa" src="/images/fb.png" alt=""/>
                                        {/* </div> */}
                                        </b>
                                    )}
                                    />
                                    <GoogleLogin
                                        clientId={gg}
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        render={renderProps => (
                                            <b 
                                        
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}>
                                            {/* <div className=' p-2 rounded-full '> */}
                                            <img className="img-gg" src="/images/google.png" alt=""/>
                                            {/* </div> */}
                                        
                                            </b>
                                        )}
                                    ></GoogleLogin>
                                </p>
                                
                                
                            </li>

                            
                            
                                
                            
                        </ul>
                    </form> 
                    
                    </div>
    </div> 
    
    
    
}
export default LoginScreen;