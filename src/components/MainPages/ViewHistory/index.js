import React, { useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
//import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import { removeOrder, viewHistoryGet } from '../../../actions/orderActions';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import OrderStatus from '../../OrderStatus/index';
import { useTranslation } from 'react-i18next';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import { toast } from 'react-toastify';
import PriceText from '../../Config/PriceText';

function ViewHistory(props){

     const { t } = useTranslation(['mainpages_viewhistory']);
     const viewHistoryOrder = useSelector(state => state.viewHistoryOrder);
     const {viewHistory, loading, error } = viewHistoryOrder;
     const dispatch = useDispatch();
     const removeOrderHandler = (id_order)=>{
        if(window.confirm(t('mainpages_viewhistory:delete_confirm'))){
            dispatch(removeOrder(id_order));
            toast.success(t('mainpages_viewhistory:delete_success'));
        }
     }
    
    //console.log(viewHistory);
    useEffect(() => {
        dispatch(viewHistoryGet(props.match.params.id));
        return () => {};
    }, [dispatch, props.match.params.id])
    let c=0;
    const checkOrderStatus =()=>{
        viewHistory?.orderStatus?.map(i=>(
                
               (i.isCompleted===true)&& c++
            ))
        console.log(c)
        if(c>2) return true;
        else return false;
    }
    
    return<div>
        <TopBar/>
        <BottomBar></BottomBar>
        <NavBar/>
        {loading?(
           <LoadingBackdrop open={loading}/>
            ):
            error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):(
               
                <div>
                 <OrderStatus/>
                <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h4>
                          <b>{t('mainpages_viewhistory:shipping_address')}</b> 
                        </h4>
                        <div>
                            {viewHistory.city},
                            {viewHistory.address }
                        </div>
                    </div>
                    <div>
                        <h4>
                            <b>{t('mainpages_viewhistory:shipping_user')}</b>
                        </h4>
                        <div>
                            {viewHistory.name},
                            {viewHistory.phone}
                        </div>
                    </div>
                    <div>
                        <h3>
                          <b>{t('mainpages_viewhistory:payment')} </b> 
                        </h3>
                        <div>
                        {t('mainpages_viewhistory:payment_method')} {viewHistory.payment},
                        {t('mainpages_viewhistory:payment_status')} <b>{t(`mainpages_viewhistory:${viewHistory.paymentStatus}`)}</b> 
                        </div>
                    </div>
                        <div className="cart-page">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12" >
                                        <div className="cart-page-inner">
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead className="thead-dark"> 
                                                            <tr>
                                                                <th>{t('mainpages_viewhistory:product')}</th>
                                                                <th>{t('mainpages_viewhistory:price')}</th>
                                                                <th>{t('mainpages_viewhistory:color')}</th>
                                                                <th>{t('mainpages_viewhistory:size')}</th>
                                                                <th>{t('mainpages_viewhistory:quantity')}</th>
                                                                <th>{t('mainpages_viewhistory:total')}</th>
                                                                
                                                            </tr>    
                                                    </thead>
                                                    <tbody className="align-middle">
                                                    {
                                                            viewHistory?.cart?.map(item=>
                                                                <>
                                                                        <tr key={item._id}>

                                                                            <td>
                                                                                <div className="img">
                                                                                    <Link to={"/product-detail/"+item.id}>
                                                                                    <img src={item.img} alt="Product" />
                                                                                    </Link>
                                                                                    <p><Link to ={"/product-detail/" +item.id}>  {item.name}</Link></p>     
                                                                                </div>
                                                                            </td>
                                                                            <td><PriceText price={item.price}/></td>
                                                                            <td>{item.color.name}</td>
                                                                            <td>{item.size.name}</td>
                                                                            <td>
                                                                                <div className="qty">
                                                                                    
                                                                                    <input type="text"
                                                                                    value={item.quantity}  />
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                            <td><PriceText price={item.price * item.quantity}/></td>

                                                                        </tr>
                                                                        
                                                                </>
                                                    )}
                                                             
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="placeorder-action">
                    <ul>
                        <li>
                            <h3><b>{t('mainpages_viewhistory:order_summary')}</b></h3>
                        </li>
                        <li>
                            
                                <div>
                                {t('mainpages_viewhistory:sub_total')}
                                </div>
                                <div>
                                   <PriceText price={viewHistory?.order_subtotal}/>
                                </div>
                            
                            
                        </li>
                        <li>
                            
                                <div>
                                {t('mainpages_viewhistory:shipping')}
                                </div>
                                <div>
                                   <PriceText price={viewHistory?.shiping}/>
                                </div>
                            
                            
                        </li>
                        <li>
                            
                            <div>
                            {t('mainpages_viewhistory:order_total')}
                            </div>
                            <div>
                               <PriceText price={viewHistory?.order_subtotal }/>
                            </div>
                        </li>
                        <li>
                            {
                                <button className="checkout-btn" disabled={checkOrderStatus()===true}
                                  onClick ={() =>removeOrderHandler(viewHistory?._id )}>{t('mainpages_viewhistory:delete_orders')}
                                </button>
                                
                            }
                            
                        </li>
                    </ul>
                    
                </div>
                </div>
               
                <FooterPage/>
                <ScrollToTopBtn /> 
                
            </div>
            
            )
        }
                
       
        
    </div>
    
   
}
export default ViewHistory
