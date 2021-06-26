import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { filterProducts, listCategory, listProductsOfPage, searchFilterProducts, sortProducts } from '../../../actions/productActions';
//import LoadingBox from '../../Config/LoadingBox';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { useTranslation } from 'react-i18next';
import Rating from '../ProductDetails/rating';



function SearchScreen(props){
    const { t } = useTranslation(['mainpages_search']);
    const searchHeader = useSelector(state => state.searchHeader);
    const {productSearch, loading , error} = searchHeader;


    useEffect(() => {
        
        //dispatch(listProducts());
        //dispatch(listCategory());
        return () => {
        };
    }, [])
    //Add to cart
   
    
   
    return <div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        {loading?(<>
            <LoadingBackdrop open={loading}/>
            <div  style={{height:"300px"}}></div>
        </>
            
        ):
        error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        (
            
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {  productSearch.length === 0 ?(                                                 
                                <div className="empty-cart1 ">
                                    <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                    <p className="empty-cart-note">{t('mainpages_search:search_products')}</p>
                                    <Link className="empty-cart-shopping" to="/">{t('mainpages_search:go_to_shopping')}</Link>
                                </div>
                                ):
                                productSearch.map((product) =>

                                    <div className="col-md-3" key={product._id}>
                                        <div className="product-item">
                                            <div className="product-title">
                                                <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                            </div>
                                            <div className="product-image">
                                                    <img className="image-product" src={product.images[0]} alt="Product" />
                                                    <div className="product-action">
                                                        <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" /></Link>             
                                                    </div>
                                            </div>
                                            <div className="product-price">
                                                <h3>${product.price}</h3>
                                                <div className="ratting">
                                                            <Rating props={product}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            
                        </div>
                        
                    </div>           
                    
                </div>
                {/* Side Bar End */}
            </div>
        </div>)
    }
    <Brand/>
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default SearchScreen;