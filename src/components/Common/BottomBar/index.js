import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MobileBottomBar from './MobileBottomBar/index'
import {Link} from "react-router-dom";
import Search from './Search';
import { useTranslation } from "react-i18next";


function Index(props) {
    const { t } = useTranslation(['common_btbar_index']);
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const cartGet = useSelector((state) => state.cartGet);
    const {cartItems} = cartGet;
    //console.log(cartItems);
    const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
return (
        
 <div className="bottom-bar">
    <div className="container-fluid">
        <div className="d-lg-flex d-md-flex  align-items-center justify-content-between">
            {isSmallScreen?(
                <div className="d-flex justify-content-between align-items-center ">
                    <MobileBottomBar />
                    <div className="col-md-3 ">
                        <div className="logo">
                            <Link to="/">
                                <img src="/img/logo.png" alt="Logo"/>
                            </Link>
                        </div>
                    </div>
                    {userInfo ? (
                        <Link to="/cart" >
                        <span className="cart-nav-icon notification"   >
                            <ShoppingCartOutlinedIcon />
                                {cartItems?.length>0 &&<span className="notification__counter__bottom">{cartItems?.reduce((a,c) => a+ c.quantity,0)}</span>}
                        </span>              
                        </Link>
                    ) : (
                    <div></div>
                )}
                </div>
                ):(
                    <div className="col-md-3 ">
                        <div className="logo">
                            <Link to="/">
                                <img src="/img/logo.png" alt="Logo"/>
                            </Link>
                        </div>
                    </div>
                )
            }
           
            {userInfo?(
                < >
                    <div className="col-md-6 mr-5 search__mobile-search-res">
                        <div className="search">
                            <Search/> 
                        </div>
                    </div>
                    <div className="col-md-2 search__mobile-res ">
                            <div className="user-name_bottom-bar">
                             <Link className="name__to-profile" to="/profile"> {t('common_btbar_index:hello')} {userInfo?.newUser?.name}</Link>  
                            </div>                   
                        
                    </div>
                </>

                ):(
                    <div className="mr-5" >
                        <Link to="/login" className="btn__bottom-bar btn-sm mr-2 search__mobile-res table__res">{t('common_btbar_index:login')}</Link>                 
                        <Link to="/register" className="btn__bottom-bar btn-sm mr-2 search__mobile-res ">{t('common_btbar_index:register')}</Link>
                    </div>
                )
                
            }
        </div>
    </div>
 </div> 
);
}

export default Index;

