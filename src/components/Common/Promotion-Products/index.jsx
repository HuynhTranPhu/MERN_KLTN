import React, {useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/index';
import NavBar from '../NavBar/index';
import FooterPage from '../Footer/Footer';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTop';
import { getBanner } from '../../../actions/promotionAction';
import { listProducts } from '../../../actions/productActions';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import { Link } from 'react-router-dom';
import Rating from '../../MainPages/ProductDetails/rating'
import './index.css';
function PromotionProducts() {
    const { t } = useTranslation(['common_promotion_product']);

    const getBanners = useSelector(state => state.getBanners);
    const {banners } = getBanners;

    const productList = useSelector(state => state.productList);
    const {products,loading} = productList;
    const dispatch = useDispatch();
    

    // const [deals, setDeals]= useState([]);
    useEffect(() => {
        dispatch(getBanner())
        dispatch(listProducts());
        return () => {
        };
    }, [dispatch])

    return (
        <div>
            <TopBar/>
            <BottomBar></BottomBar>
            <NavBar/>
            {loading?(<><LoadingBackdrop open={loading}/>
                <div  style={{height:"300px"}}></div></>)
            :(
                
            <div className="product-view">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <h1>{t('common_promotion_product:promotions')}</h1>
                            <p className="p__promotion">{t('common_promotion_product:guide')}</p>
                            <div className="row">
                                
                                {
                                        products?.map((product) =>{
                                            return product.id_category === banners?.map((banner)=>banner.id_category)[0]?
                                            <div className="col-md-3" key={product._id}>
                                                <div className="product-item">
                                                    <div className="style_ribbon__25ikq style_price_down__1Hhvc">
                                                        <div className="style_ribbon_percent__4fm_G">{banners?.map((banner)=>banner.disCount)[0]}%</div>
                                                        <div className="style_ribbon_status__3DLch">{t('common_promotion_product:decrease_price')}</div>
                                                    </div>
                                                    <div className="product-image">
                                                            <img className="image-product" src={product.images[0]|| '/img/no-image.png'} alt="Product" />
                                                            <div className="product-action">
                                                                <Link to={'/product-detail/' + product._id}><i className="fas fa-eye" /></Link>             
                                                            </div>
                                                    </div>
                                                    <div className="product-title__promotion">
                                                        <Link to={'/product-detail/' + product._id}>{product.name}</Link>
                                                    </div>
                                                    <div className="product-price">
                                                        <h3>${product.sellPrice?product.sellPrice:0} <span>${product.price}</span></h3>
                                                        <div className="ratting">
                                                            <Rating props={product}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>:null
                                        } )
                                       
                                }
                                {
                                     banners?.length<=0 && <div className="col text-center font-weight-bold">
                                         <h4 className="font-weight-bold" >{t('common_promotion_product:no_promotion')}</h4>
                                         <div  style={{height:"100px"}}></div>
                                    </div>
                                }
                                
                            </div>
                        
                        
                            
                            {/* Pagination Start */}
                        </div>           
                        
                    </div>
                    {/* Side Bar End */}
                </div>
            </div>)
        }

            
            
            <FooterPage/>
            <ScrollToTopBtn />
        </div>
    )
}

export default PromotionProducts
