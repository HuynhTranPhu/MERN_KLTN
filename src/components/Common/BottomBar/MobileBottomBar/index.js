import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../../actions/userAction';
import './index.css';

function MobileBottomBar() {
  const {i18n, t } = useTranslation(['common_btbar_mbbtbar_index']);
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const onLanguageClick = (code) => {
    i18n.changeLanguage(code);
  };
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
                <div className="mobile-menu-user-link">{t('common_btbar_mbbtbar_index:login_to_see')}</div>
                <div className="text-center mt-3">
                    <Link  to="/login" className=" btn__menu-mobile btn-sm mr-2">{t('common_btbar_mbbtbar_index:login')}</Link>                 
                    <Link to="/register" className="btn__menu-mobile btn-sm mr-2">{t('common_btbar_mbbtbar_index:register')}</Link>
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
                        <i className="rockland-nav__icon far fa-calendar-check" />
                          {t('common_btbar_mbbtbar_index:my_orders')}
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
                    <span>{t('common_btbar_mbbtbar_index:products')}</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-shopping-bag" />
                    <span>{t('common_btbar_mbbtbar_index:best_selling')}</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa fa-plus-square" />
                    <span>{t('common_btbar_mbbtbar_index:new_arrivals')}</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-female" />
                    <span>{t('common_btbar_mbbtbar_index:fashion_beauty')}</span>
                    </a>
                  </Link>
                </li>
                <li className="mobile-menu-list-item">
                  <Link to="/product-list">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fa fa-child" />
                    <span>{t('common_btbar_mbbtbar_index:kids_babies_clothes')}</span>
                    </a>
                  </Link>
                </li>
                

                <hr className="hr my-3" />

                <li className="mobile-menu-list-item">
                  <Link to="/contact">
                    <a className="mobile-menu-link">
                    <i className="rockland-nav__icon fas fa-map-marker-alt" />
                    <span>{t('common_btbar_mbbtbar_index:contact_us')}</span>
                    </a>
                  </Link>
                </li>
                {
                  userInfo&&(
                    <li className="mobile-menu-list-item">
                      <Link to="/update-password">
                        <a className="mobile-menu-link">
                        <i className="rockland-nav__icon fa fa-key" />
                        <span> {t('common_btbar_mbbtbar_index:change_password')}</span>
                        </a>
                      </Link>
                    </li>
                  )
                }
                <hr className="hr my-3" />
                <div className="mobile-menu-item-title">{t('common_btbar_mbbtbar_index:language')}</div>
                <div className="change__language">
                  <div className="language">
                    <img src="/img/vn.png" alt="vn" />
                    <a
                      onClick={() => onLanguageClick('vi')}
                      aria-hidden="true"
                      className="language-title">
                      {t('common_btbar_mbbtbar_index:vn')}
                    </a>
                  </div>
                  <div className="language language-en">
                    <img src="/img/en.png" alt="vn" />
                    <a
                      onClick={() => onLanguageClick('en')}
                      aria-hidden="true"
                      className="language-title">
                      {t('common_btbar_mbbtbar_index:en')}
                    </a>
                  </div>
                </div>
               
              </ul>
            </div>
            {userInfo && (
              <div className="logout__mobile">
                <hr className="hr my-3" />
                <button type="button" className="mobile-menu-list-item pb-3" onClick={logoutHandler}>
                  <i className="rockland-nav__icon fas fa-sign-out-alt  " />
                  {t('common_btbar_mbbtbar_index:logout')}
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
