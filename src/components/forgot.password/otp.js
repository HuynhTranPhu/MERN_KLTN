import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import Footer from '../Common/Footer/Footer'
import { useTranslation } from 'react-i18next'
const OTP = ({ setOTP, submitOTP, notificationOTP }) =>{
    const { t } = useTranslation(['password_otp']);
    return   (
        <div>
            <TopBar/>
            <BottomBar  ></BottomBar>
            <NavBar/>
            <div className="container text-center">
                <div className="content-404 forgotpass">
                    <h1><b>{t('password_otp:enter_otp')}
                    </b></h1>
                    <span>{notificationOTP}</span>
                    <input
                        type="text"
                        placeholder="Otp code"
                        onChange={(e) => setOTP(e.target.value)}
                    />
                    <span className="otp-notify">{t('password_otp:check_mail')}</span>
                    <br />
                    <button
                        className="btn btn-default"
                        onClick={() => submitOTP()}>
                        {t('password_otp:submit')}
                    </button>
                    <h2><Link to="/">{t('password_otp:bring_me_back_home')}</Link></h2>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
    

}
   
export default OTP