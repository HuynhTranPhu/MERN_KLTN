import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../../actions/userAction';
import './index.css';



function MobileBottomBar() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const dispatch = useDispatch();
  const logoutHandler = () =>{
      dispatch(logout());}



  return (
    <div className="mobile-menu">
      <div className="icon__mobile__menu-res ">
        <button onClick={() => setOpen(true)}>
          <MenuIcon className="mobile-menu-icon" />
        </button>
      </div>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="mobile-menu-main">
          {userInfo ? (
            <Link to="/profile">
              <div className="mobile-menu-user mobile-menu-user-link">
                <i className="far fa-user-circle mr-3" />
                <a className="mobile-menu-user-link">{userInfo.newUser.name}</a>
                <i className="fas fa-chevron-right mobile-menu-user-link ml-3"></i>
              </div>
            </Link>
          ) : (
            <div className="mobile-menu-user">
              <div>
                <div className="mobile-menu-user-link">Đăng nhập để tìm hiểu sản phẩm</div>
                <div className="text-center mt-3">
                    <Link  to="/login" className=" btn__menu-mobile btn-sm mr-2">Login</Link>                 
                    <Link to="/register" className="btn__menu-mobile btn-sm mr-2">Register</Link>
                </div>
              </div>
            </div>
          )}
          <div className="mobile-menu-content">
            <div>
              <ul className="mobile-menu-content__list text-capitalize mobile-menu-list">
                {userInfo && (
                  <>
                    <li className="mobile-menu-list-item">
                      <Link to="/history">
                        <a className="mobile-menu-link">
                        <i className="far fa-calendar-check mr-2" />
                         My orders
                        </a>
                      </Link>
                    </li>
                    
                    <hr className="hr my-3" />
                  </>
                )}
                 

                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fas fa-list-ul" />
                    <span>Products</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-shopping-bag" />
                    <span>Best Selling</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa fa-plus-square" />
                    <span>New Arrivals</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-female" />
                    <span>Fashion & Beauty</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-child" />
                    <span>Kids & Babies Clothes</span>
                    </a>
                  </Link>
                </li>
                

                <hr className="hr my-3" />

                <li className="mobile-menu-list-item">
                  <Link to="/contact">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fas fa-map-marker-alt" />
                    <span>Contact us</span>
                    </a>
                  </Link>
                </li>
                {
                  userInfo&&(
                    <li className="mobile-menu-list-item">
                      <Link to="/update-password">
                        <a className="mobile-menu-link">
                        <i className="rockland-nav__icon fa fa-key" />
                        <span> Change password</span>
                        </a>
                      </Link>
                    </li>
                  )
                }
               
              </ul>
            </div>
            {userInfo && (
              <div className="logout__mobile">
                <hr className="hr my-3" />
                <button type="button" className="mobile-menu-list-item pb-3" onClick={logoutHandler}>
                  <i className="fas fa-sign-out-alt  " />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileBottomBar;
