import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, listCategory, listProductsOfPage, sortProducts } from '../../../actions/productActions';
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
import PriceText from '../../Config/PriceText';





function ProductScreen(props){
    const { t } = useTranslation(['mainpages_product']);
    const productList = useSelector(state => state.productList);
    const {cate, filteredItems, sort, loading, error, numberOfPages} = productList;


    const categories = useSelector(state => state.categoryList);
    const {category} = categories;
    //console.log(numberOfPages);
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
    }, [dispatch,pageNumber])
    
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
        
        
        {loading?(<><LoadingBackdrop open={loading}/>
            <div  style={{height:"80px"}}></div></>)
        :error? (
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
                                        <div className="col-md-3 product-view-top__count-page ">
                                            {`${filteredItems.length} ${t('mainpages_product:count_in_page')} ${pageNumber>numberOfPages? 1 : pageNumber}`}
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-3">
                                            <div className="product-filter">
                                                    <select
                                                        value={cate}
                                                        onChange={(e) => {
                                                             
                                                            if(e.target.value===""){
                                                                dispatch(listProductsOfPage(pageNumber))
                                                            }else{
                                                                dispatch(filterProducts(
                                                                    e.target.value,
                                                                    pageNumber>numberOfPages? 1 : pageNumber
                                                                    ))
                                                            }
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
                                    <div className="empty-cart2 ">
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
                                                    <h3><PriceText price={product.price}/></h3>
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
                            <button disabled={pageNumber===1} onClick={gotoPrevious}>{t('mainpages_product:previous')}</button>
                            {pages.map((pageIndex) => (
                                <button className={pageNumber===pageIndex?'active':''}  key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                                {pageIndex }
                                </button>
                            ))}
                            <button disabled={pageNumber===1}  onClick={gotoNext}>{t('mainpages_product:next')}</button>
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