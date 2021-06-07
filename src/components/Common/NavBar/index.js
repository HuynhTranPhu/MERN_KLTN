import React, { useEffect, useState } from 'react';
import { Menu } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../../actions/userAction';
import { useTranslation } from "react-i18next";
import { getCart } from '../../../actions/cartAction';

const Index = () => {

    const { t } = useTranslation(['common_navbar']);
    // const cart = useSelector((state) => state.cart);
    // const {cartItems} = cart;
    const cartGet = useSelector(state => state.cartGet);
    const {cartItems} = cartGet;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
  
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(logout());}
    
    useEffect(() => { 
        //dispatch(getCart(userInfo?.newUser?._id));
        return () => {
            //
        };
        // if(productId){
        //     dispatch(addToCart(productId,qty));
        // }
    },
    // []
        []
    );
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
                                  <NavLink to="/cart" className="nav-item nav-link">{t('common_navbar:cart')}</NavLink>
                                  {/* <NavLink to="/profile" className="nav-item nav-link">My Account</NavLink> */}
                                  <NavLink to="/contact" className="nav-item nav-link">{t('common_navbar:contact_us')}</NavLink>
                                  {/* <NavLink to="/place-order" className="nav-item nav-link">Place Order</NavLink> */}
                                  {/* <NavLink to="/history" className="nav-item nav-link">History</NavLink> */}
                              </div>
                              <div className="navbar-nav ml-auto">
                                  {
                                      userInfo?(
                                        <div className="header-right flex-shrink-0 ">
                                            <ul className="nav align-items-start">
                                                <div className="nav-right-side">
                                                    <li className="nav-items custom-nav-item-cart">
                                                        <Link to="/cart" className="cart-nav-icon">
                                                                <a className="rockland-nav__link notification" >
                                                                    <ShoppingCartOutlinedIcon />
                                                                    {/* <span className="extraCart"> {t('cart:cart')} </span> */}
                                                                        {cartItems?.length>0 &&<span className="notification__counter">{cartItems.reduce((a,c)=> a + c.quantity,0)}</span>}
                                                                </a>              
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
                                                            <a className="dropdown__item dropdown__item-link">
                                                            <i className="far fa-user-circle dropdown__item-icon" />
                                                            {t('common_navbar:my_account')}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/history">
                                                            <a className="dropdown__item dropdown__item-link">
                                                            <i className="far fa-calendar-check dropdown__item-icon" />
                                                            {t('common_navbar:my_order')}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/" onClick={logoutHandler}>
                                                            <a className="dropdown__item dropdown__item-link">
                                                                <i className="fas fa-sign-out-alt dropdown__item-icon" />
                                                                {t('common_navbar:logout')}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/update-password" >
                                                            <a className="dropdown__item dropdown__item-link">
                                                                <i className="fa fa-key dropdown__item-icon" />
                                                                {t('common_navbar:change_password')}
                                                            </a>
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