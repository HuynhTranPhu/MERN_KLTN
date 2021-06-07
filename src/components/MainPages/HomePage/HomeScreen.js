import React, {useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {listProductsSelling } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';

import Brand from '../../Brand/Brand';
import Review from '../../Review/Review';
import HeaderSlider from '../../Header/HeaderSlider/HeaderSlider';
import {addCart, addToCart, getCart } from '../../../actions/cartAction';
import  BottomBar from '../../Common/BottomBar/index'
import Feature from '../../Common/Feature/index'
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';

import { useTranslation } from 'react-i18next';


function HomeScreen(props){
    
    const { t } = useTranslation(['feature_home','mainpages_home']);

    const productListSelling = useSelector(state => state.productListSelling);
    const {productSelling,loading , error} = productListSelling;
    
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const dispatch = useDispatch();

    const feature = [ {title:t('feature_home:secure_payment'),content:t('feature_home:chose_payment'), icon:'fab fa-cc-mastercard'},
                    {title:t('feature_home:delivery'),content:t('feature_home:delivery_in_the_world'),icon:'fa fa-truck'},
                    {title:t('feature_home:day_return'),content:t('feature_home:can_return'), icon:'fas fa-sync'},
                    {title:t('feature_home:support'),content:t('feature_home:always_support'), icon:'fa fa-comments'}
                    ]
  
    useEffect(() => {
        dispatch(listProductsSelling());
        dispatch(getCart(userInfo?.newUser?._id));
        return () => {
        };
    }, [])
    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return(
        loading?(
            <LoadingBox></LoadingBox>
        ):error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        <div>
            <TopBar/>
            <BottomBar  ></BottomBar>
            <NavBar/>
             <div className="header">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 header__mobile-res">
                              <nav className="navbar bg-light">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/"><i className="fa fa-home"></i>Home</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-shopping-bag"></i>Best Selling</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-plus-square"></i>New Arrivals</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-female"></i>Fashion & Beauty</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-child"></i>Kids & Babies Clothes</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link"to="/product-list"><i className="fas fa-tshirt"></i>Men & Women Clothes</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fas fa-mobile"></i>Gadgets & Accessories</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="/product-list"><i className="fa fa-microchip"></i>Electronics & Accessories</Link>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                          <HeaderSlider/>
                          <div className="col-md-3 header__mobile-res">
                              <div className="header-img">
                                  <div className="img-item">
                                      <img src="/img/category-1.jpg" />
                                      <Link className="img-text" to="/product-list">
                                          <p>{t('mainpages_home:woman_fashion')}</p>
                                      </Link>
                                  </div>
                                  <div className="img-item">
                                      <img src="/img/category-2.jpg" />
                                      <Link className="img-text" to="/product-list">
                                          <p>{t('mainpages_home:kids_fashion')}</p>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Main Slider End -->      
              
              <!-- Brand Start --> */}
              <Brand/>
              {/* <!-- Brand End -->      
              
              <!-- Feature Start--> */}
              <div className="feature">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          {feature.map(item=><Feature key={item.title} title={item.title}content={item.content} icon={item.icon}></Feature>)}
                      
                      </div>
                  </div>
              </div>
              {/* <!-- Feature End-->      
              
              <!-- Category Start--> */}
              <div className="category">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src="img/category-3.jpg" />
                                  <Link className="category-name" to="" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-250">
                                  <img src="img/category-4.jpg" />
                                  <Link className="category-name"to="" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </Link>
                              </div>
                              <div className="category-item ch-150">
                                  <img src="img/category-5.jpg" />
                                  <Link className="category-name"to="" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-150">
                                  <img src="img/category-6.jpg" />
                                  <Link className="category-name"to="" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </Link>
                              </div>
                              <div className="category-item ch-250">
                                  <img src="img/category-7.jpg" />
                                  <Link className="category-name"to="" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src="img/category-8.jpg" />
                                  <a className="category-name" >
                                      <p>{t('mainpages_home:hot_trend')}</p>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Category End-->       
              
              <!-- Call to Action Start --> */}
              <div className="call-to-action">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          <div className="col-md-6">
                              <h1>{t('mainpages_home:call_us')}</h1>
                          </div>
                          <div className="col-md-6">
                              <a href="tel:0123456789">+034-304-8571</a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Call to Action End -->       
              
              <!-- Featured Product Start --> */}
               <div className="featured-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>{t('mainpages_home:featured_product')}</h1>
                      </div>
                      {/* <div className="align-items-center "> */}
                        <Slider {...settings}>
                        {
                            productSelling.map( (product) =>
                                <div className="col-lg-12" key={product?._id}>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <Link to={'/product-detail/' + product?._id}>{product?.name}</Link>
                                        </div>
                                        <div className="product-image">
                                            {
                                                <img className="image-product" src={product?.images[0]} alt="Product "/>
                                            }  
                                            <div className="product-action">   
                                                    <Link to={'/product-detail/' + product?._id}><i className="fas fa-eye" ></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{product?.price}</h3>                                          
                                            {/* {
                                                product?.quantity>0 && 
                                                <a className="btn btn_tablet_res-add-cart" 
                                                    onClick={()=>addToCartHandler( product?._id,product.name,product.price ,product.img)} >
                                                    <i className="fa fa-shopping-cart"></i>Add To Cart
                                                </a>
                                            } */}
                                        </div>
                                    </div>
                                </div> 
                                )
                        } 
                        </Slider>   
                      {/* </div> */}
                  </div>
              </div>
              <Review/>
              <FooterPage/>
              
              <ScrollToTopBtn />
        </div>
    )
}
export default HomeScreen;