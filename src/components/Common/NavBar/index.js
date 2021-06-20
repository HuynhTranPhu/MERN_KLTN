import React, { useState } from 'react';
import { Menu } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../../actions/userAction';
import { useTranslation } from "react-i18next";

const Index = () => {

    const { t } = useTranslation(['common_navbar']);
    const cartGet = useSelector(state => state.cartGet);
    const {cartItems} = cartGet;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
  
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(logout());}
    
    
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const closeMenu = () => {
        setAnchorEl(null);
    };
    return (
        <div className="nav nav-Bar">
                  <div className="container-fluid">
                      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                          {/* <Link to="" className="navbar-brand">MENU</Link>
                          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                              <span className="navbar-toggler-icon"></span>
                          </button> */}

                          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                              <div className="navbar-nav mr-auto ml-3">
                                  <NavLink to="/" className="nav-item nav-link">{t('common_navbar:home')}</NavLink>
                                  <NavLink to="/product-list" className="nav-item nav-link">{t('common_navbar:products')}</NavLink>
                                  <NavLink to="/contact" className="nav-item nav-link">{t('common_navbar:contact_us')}</NavLink>
                                  <NavLink to="/size-chart" className="nav-item nav-link">{t('common_navbar:size_chart')}</NavLink>
                                  <NavLink to="#" className=" dropdown dropdown-nav nav-item nav-link">
                                    <div data-toggle="dropdown" data-hover="dropdown">
                                        <Link to="#" className="rockland-nav__link">
                                            <span className="rockland-nav__title">{t('common_navbar:promotion')}</span>
                                        </Link>
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <Link to="/promo-codes">
                                            <span className="dropdown-item-text p-0">
                                                {t('common_navbar:promo_code')}
                                            </span>
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/promotions">
                                            <span className="dropdown-item-text p-0">
                                               {t('common_navbar:promo_products')}
                                            </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavLink>
                              </div>
                              <div className="navbar-nav ml-auto">
                                  {
                                      userInfo?(
                                        <div className="header-right flex-shrink-0 ">
                                            <ul className="nav align-items-start">
                                                <div className="nav-right-side">
                                                    <li className="nav-items custom-nav-item-cart">
                                                        <Link to="/cart" className="cart-nav-icon">
                                                                <span className="rockland-nav__link notification" >
                                                                    <ShoppingCartOutlinedIcon />
                                                                        {cartItems?.length>0 &&<span className="notification__counter">{cartItems.reduce((a,c)=> a + c.quantity,0)}</span>}
                                                                </span>              
                                                        </Link>
                                                    </li>
                                                    <li className="nav-items ml-4">
                                                        <button className="rockland-nav__link" onClick={openMenu}>
                                                        <i className="fas fa-bars rockland-nav__icon m-0" />
                                                        </button>
                                                    </li>
                                                </div>
                                                
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={!!anchorEl}
                                                    keepMounted
                                                    onClose={closeMenu}
                                                    transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right'
                                                    }}>
                                                    <div>
                                                        <Link to="/profile">
                                                            <span className="dropdown__item dropdown__item-link">
                                                            <i className="far fa-user-circle dropdown__item-icon" />
                                                            {t('common_navbar:my_account')}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/history">
                                                            <span className="dropdown__item dropdown__item-link">
                                                            <i className="far fa-calendar-check dropdown__item-icon" />
                                                            {t('common_navbar:my_order')}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/" onClick={logoutHandler}>
                                                            <span className="dropdown__item dropdown__item-link">
                                                                <i className="fas fa-sign-out-alt dropdown__item-icon" />
                                                                {t('common_navbar:logout')}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/update-password" >
                                                            <span className="dropdown__item dropdown__item-link">
                                                                <i className="fa fa-key dropdown__item-icon" />
                                                                {t('common_navbar:change_password')}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </Menu>
                                            </ul>
                                           
                                        </div>
                                        
                                      ):null
                                  }
                              </div>
                          </div>
                      </nav>
                  </div>
        </div>
    );
};

export default Index;