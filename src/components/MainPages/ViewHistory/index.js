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

function ViewHistory(props){

     const { t } = useTranslation(['mainpages_viewhistory']);
     const viewHistoryOrder = useSelector(state => state.viewHistoryOrder);
     const {viewHistory, loading, error } = viewHistoryOrder;
     const removeOrder1 = useSelector(state => state.removeOrder);
     const { success } = removeOrder1;
     const dispatch = useDispatch();
     const removeOrderHandler = (id_order)=>{
        if(window.confirm('Do you want to delete this item?')){
            dispatch(removeOrder(id_order));
            
        }
     }
    //const [viewHistory, setViewHistory] = useState([])
    //const dispatch = useDispatch();
    //const cartItems=[];
    console.log(viewHistory);
    useEffect(() => {
        dispatch(viewHistoryGet(props.match.params.id));
        if(success===true){
            props.history.push('/history');
        }
        return () => {};
    }, [dispatch, success, props.match.params.id, props.history])
    let c=0;
    const checkOrderStatus =()=>{
        viewHistory?.orderStatus?.map(i=>(
                
               (i.isCompleted===true)&& c++
                
                
            ))
        if(c>2) return true;
        else return false;
    }
    console.log(checkOrderStatus());
    // const toPrice = (num) => Number(num.toFixed(2));
    // const totalPrice = toPrice(viewHistory.map(item=>item.order_subtotal ))+toPrice(viewHistory.map(item=>item.shiping ));
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
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
                        {t('mainpages_viewhistory:payment_status')} {t(`mainpages_viewhistory:${viewHistory.paymentStatus}`)}
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
                                                                                    <Link to={"/product-detail/"+item._id}>
                                                                                    <img src={item.img} alt="Product" />
                                                                                    </Link>
                                                                                    <p><Link to ={"/product-detail/" +item._id}>  {item.name}</Link></p>     
                                                                                </div>
                                                                            </td>
                                                                            <td>${item.price}</td>
                                                                            <td>{item.color.name}</td>
                                                                            <td>{item.size.name}</td>
                                                                            <td>
                                                                                <div className="qty">
                                                                                    
                                                                                    <input type="text"
                                                                                    value={item.quantity}  />
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                            <td>${item.price * item.quantity}</td>

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
                                    ${viewHistory?.order_subtotal?.toFixed(2)}
                                </div>
                            
                            
                        </li>
                        <li>
                            
                                <div>
                                {t('mainpages_viewhistory:shipping')}
                                </div>
                                <div>
                                    ${viewHistory?.shiping?.toFixed(2)}
                                </div>
                            
                            
                        </li>
                        <li>
                            
                            <div>
                            {t('mainpages_viewhistory:order_total')}
                            </div>
                            <div>
                                ${viewHistory?.order_subtotal?.toFixed(2) }
                            </div>
                        </li>
                        <li>
                            {
                                <button className="checkout-btn" disabled={c>2}
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
