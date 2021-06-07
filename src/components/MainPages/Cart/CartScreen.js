import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {  removeCart, increaseCart, decreaseCart } from '../../../actions/cartAction';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { useTranslation } from 'react-i18next';
import LoadingBox from '../../Config/LoadingBox';
import Brand from '../../Brand/Brand';

function CartScreen(props){
    const { t } = useTranslation(['mainpages_cart']);
    let productList = useSelector(state => state.productList);
    let {products} = productList;

    const cartGet = useSelector(state => state.cartGet);
    const {cartItems,loading} = cartGet;
    //console.log(cartItems)
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const [detailProduct, setDetailProduct] = useState([])
 

    //const productId = props.match.params.id;
    //const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;
    //let total=0 ;
    //let grandTotal=0;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId, color,size) =>{
        if(window.confirm('Do you want to delete this item?')){
            dispatch(removeCart(userInfo.newUser._id, productId, color,size));
           // if(successRemove){
               // dispatch(removeFromCart(id));
            //}
        }
        
    }
    const decreaseHandler = (productId, color,size) =>{
        dispatch(decreaseCart(userInfo.newUser._id,productId, color,size));
        
        //if(successDecrease){
           // dispatch(decrease(productId));
        //}
    }
    const increaseHandler = (productId, color, size) =>{
        products.forEach(product => {
            if(product._id === productId) setDetailProduct(product)
        })
            dispatch(increaseCart(userInfo.newUser._id,productId, color, size));
            
    }
    useEffect(() => { 
        return () => {
        };
    },[]);
    const checkoutHandler = () =>{
        //dispatch(addCart(userInfo.user.id,cartItems, grandTotal));
        //console.log(cartItems,grandTotal);
        props.history.push("/shipping");
    }
    return  (
        <div>
            <TopBar/>
            <BottomBar  ></BottomBar>
            <NavBar/>
            {
                loading?  <LoadingBox/>:(

                    <div className="cart-page">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8" >
                                    <div className="cart-page-inner">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="thead-dark">
                                                    {
                                                        (cartItems?.length=== 0|| cartItems==undefined) ?(                                                  
                                                            <div className="empty-cart">
                                                                <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                                                <p className="empty-cart-note">{t('mainpages_cart:empty_cart')}</p>
                                                                <Link className="empty-cart-shopping" to="/">{t('mainpages_cart:go_to_shopping')}</Link>
                                                            </div>
                                                        )
                                                        :
                                                        <tr>
                                                            <th>{t('mainpages_cart:product')}</th>
                                                            <th>{t('mainpages_cart:price')}</th>
                                                            <th>{t('mainpages_cart:color')}</th>
                                                            <th>{t('mainpages_cart:size')}</th>
                                                            <th>{t('mainpages_cart:quantity')}</th>
                                                            <th>{t('mainpages_cart:total')}</th>
                                                            <th>{t('mainpages_cart:remove')}</th>
                                                        </tr>
                                                    }
                                                    
                                                </thead>
                                                <tbody className="align-middle">
                                                    {
                                                        cartItems?.map(item=>
                                                        <tr key={item._id}>
                                                            <td>
                                                                <div className="img">
                                                                    <Link to={"/product-detail/"+item.id}>
                                                                        <img src={item.img} alt="Product" />
                                                                        </Link>
                                                                    <p><Link to ={"/product-detail/" +item.id}> {item.name}</Link></p>
                                                                </div>
                                                            </td>
                                                            <td>${item.price}</td>
                                                            <td>{item.color.name}</td>
                                                            <td>{item.size.name}</td>
                                                            <td>
                                                                <div className="qty">
                                                                    <button className="btn-minus" disabled={item.quantity===1} onClick={()=> decreaseHandler(item.id,item.color._id, item.size._id)}><i className="fa fa-minus" /></button>
                                                                    <input type="text"
                                                                    value={item.quantity} 
                                                                    //onChange={(e)=> 
                                                                    // dispatch(addToCart(item._id,Number(e.target.value))) } 
                                                                    />
                                                                    <button className="btn-plus" disabled={item.quantity===detailProduct.quantity} onClick={()=> increaseHandler(item.id,item.color._id,item.size._id)}><i className="fa fa-plus" /></button>
                                                                </div>
                                                            </td>
                                                            <td>${item.price * item.quantity}</td>
                                                            <td>
                                                                <button onClick ={() =>removeFromCartHandler(item.id, item.color._id, item.size._id)}>
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </td>
                                                        </tr>)
                                                    }
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div className="cart-page-inner">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="cart-summary">
                                                    <div className="cart-content">
                                                        <h1>{t('mainpages_cart:cart_summary')}</h1>
                                                        <p>{t('mainpages_cart:sub_total')}
                                                            <span>
                                                            ${cartItems?.reduce((a,c) => a+c.price * c.quantity,0)}
                                                            </span>
                                                        </p>
                                                        <p>{t('mainpages_cart:shipping_cost')}<span>$0</span></p>
                                                        <h2>{t('mainpages_cart:grand_total')}<span>${ cartItems?.reduce((a,c) => a+c.price * c.quantity,0)}</span></h2>
                                                    </div>
                                                    <div className="cart-btn">
                                                        <Link to="/product-list"><button>{t('mainpages_cart:update_cart')}</button></Link>
                                                        <button onClick={checkoutHandler} disabled={cartItems?.length=== 0|| cartItems==undefined}>{t('mainpages_cart:proceed_to_checkout')}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                )
            }
        <Brand/>
         <FooterPage/>
              
        <ScrollToTopBtn />
        </div>
        
                
    )
  
    
}
export default CartScreen