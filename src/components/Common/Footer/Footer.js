import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function FooterPage(){
  const { t } = useTranslation(['common_footer']);
  return (
    <div>
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>{t('common_footer:get_in_touch')}</h2>
                            <div className="contact-info">
                                <p><i className="fa fa-map-marker"></i>{t('common_footer:address')}</p>
                                <p><i className="fa fa-envelope"></i>phu@gmail.com</p>
                                <p><i className="fa fa-phone"></i>+034-304-8571</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>{t('common_footer:follow_us')}</h2>
                            <div className="contact-info">
                                <div className="social">
                                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="/"><i className="fab fa-instagram"></i></Link>
                                    <Link to="/"><i className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>{t('common_footer:company_info')}</h2>
                            <ul>
                                <li><Link to="/contact">{t('common_footer:about_us')}</Link></li>
                                <li><Link to="/">{t('common_footer:privacy_policy')}</Link></li>
                                <li><Link to="/">{t('common_footer:terms_condition')}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>{t('common_footer:purchase_info')}</h2>
                            <ul>
                                <li><Link to="/">{t('common_footer:payment_policy')}</Link></li>
                                <li><Link to="/">{t('common_footer:shipping_policy')}</Link></li>
                                <li><Link to="/">{t('common_footer:return_policy')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="row payment align-items-center">
                    <div className="col-md-6">
                        <div className="payment-method">
                            <h2>{t('common_footer:we_accept')}</h2>
                            <img src="/img/payment-method.png" alt="Payment Method" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="payment-security">
                            <h2>{t('common_footer:secured_by')}</h2>
                            <img src="/img/godaddy.svg" alt="Payment Security" />
                            <img src="/img/norton.svg" alt="Payment Security" />
                            <img src="/img/ssl.svg" alt="Payment Security" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 copyright">
                        <p>Copyright &copy;{new Date().getFullYear()}. {t('common_footer:all_reserved')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default FooterPage;