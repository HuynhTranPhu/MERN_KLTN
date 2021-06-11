import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, listCategory, listProductsOfPage, searchFilterProducts, sortProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { addCart } from '../../../actions/cartAction';
import { useTranslation } from 'react-i18next';
import Rating from '../ProductDetails/rating';
import LoadingBackdrop from '../../Config/LoadingBackdrop';




function ProductScreen(props){
    const { t } = useTranslation(['mainpages_product']);
    const productList = useSelector(state => state.productList);
    const {products,filteredItems,cate,sort,search,loading , error,numberOfPages} = productList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const categories = useSelector(state => state.categoryList);
    const {category} = categories;

    // const addCartPost = useSelector(state => state.cartPost);
    // const {success} = addCartPost;

    //pagination
    const [pageNumber, setPageNumber] = useState(1);



    const pages = new Array(numberOfPages).fill(null).map((v, i) => i+1);
    // console.log(pageNumber);
    // console.log(numberOfPages);
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsOfPage(pageNumber))
        //dispatch(listProducts());
        dispatch(listCategory());
        return () => {
        };
    }, [pageNumber])
    
    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
      };
    
      const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
      };
    return <div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        <LoadingBackdrop open={loading} />
        
        {error? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):
        (
            
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-3">
                                            {`${filteredItems.length} ${t('mainpages_product:count_in_page')} ${pageNumber}`}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-search">
                                                    <input type="text" placeholder={t('mainpages_product:search_place')}
                                                    value={search}
                                                    onChange={e=>
                                                       {
                                                           dispatch(searchFilterProducts(
                                                               products,
                                                               e.target.value
                                                           ))
                                                       }
                                                    }
                                                    />
                                                    <button><i className="fa fa-search"></i></button>    
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-filter">
                                                <select
                                                           
                                                            value={cate}
                                                            onChange={(e) => {
                                                                dispatch(filterProducts(
                                                                    products,
                                                                    e.target.value
                                                                    )) 
                                                            }}
                                                            >
                                                            <option value="">{t('mainpages_product:all_products')}</option>
                                                            {
                                                                category.map(category => (
                                                                    <option value={category._id} key={category._id}>
                                                                        {category.name}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                            </div>
                                                    
                                              
                                                
                                           
                                        </div>
                                        <div className="col-md-3">
                                           
                                              <div className="product-filter">
                                                    <select
                                                        className="product-search"
                                                        value={sort}
                                                        onChange={(e) => {
                                                        dispatch( sortProducts(
                                                            filteredItems,
                                                            e.target.value
                                                            ));
                                                        }}
                                                        >
                                                            <option value="">{t('mainpages_product:sort_by')}</option>
                                                            <option value="lowestprice">{t('mainpages_product:lowest_to_highest')}</option>
                                                            <option value="highestprice">{t('mainpages_product:highest_to_lowest')}</option>
                                                    </select>
                                              </div>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                filteredItems.length===0?(                                                 
                                    <div className="empty-cart1 ">
                                        <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                        <p className="empty-cart-note">{t('mainpages_product:search_products')}</p>
                                        <Link className="empty-cart-shopping" to="/">{t('mainpages_product:go_to_shopping')}</Link>
                                    </div>
                                    ):
                                    filteredItems.map((product) =>

                                        <div className="col-md-3" key={product._id}>
                                            <div className="product-item">
                                                <div className="product-title">
                                                    <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                                </div>
                                                <div className="product-image">
                                                        <img className="image-product" src={product.images[0]|| '/img/no-image.png'} alt="Product" />
                                                        <div className="product-action">
                                                            <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" /></Link>             
                                                        </div>
                                                </div>
                                                <div className="product-price">
                                                    <h3><span>$</span>{product.price}</h3>
                                                    <div className="ratting">
                                                        <Rating props={product}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                            
                        </div>
                       { filteredItems.length>0 &&
                        <div className="col-md-12 pagination justify-content-center">
                            <button onClick={gotoPrevious}>{t('mainpages_product:previous')}</button>
                            {pages.map((pageIndex) => (
                                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                                {pageIndex }
                                </button>
                            ))}
                            <button onClick={gotoNext}>{t('mainpages_product:next')}</button>
                        </div>
                       
                       }
                       
                        
                        {/* Pagination Start */}
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
export default ProductScreen;