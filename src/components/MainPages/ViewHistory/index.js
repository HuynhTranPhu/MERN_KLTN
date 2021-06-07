import React, { useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import LoadingBox from '../../Config/LoadingBox';
import MessageBox from '../../Config/MessageBox';
import { removeOrder, viewHistoryGet } from '../../../actions/orderActions';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import OrderStatus from '../../OrderStatus/index';
import { useTranslation } from 'react-i18next';

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
        return () => {
            //
        };
    }, [success])
    let c=0;
    const checkOrderStatus =()=>{
        viewHistory.map(item=>(
            item.orderStatus.map(i=>(
                
               (i.isCompleted===true)&& c++
                
                
            ))
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
            <LoadingBox></LoadingBox>
            ):
            error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):(
               
                <div>
                 <OrderStatus/>
                <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>
                        {t('mainpages_viewhistory:shipping_address')}
                        </h3>
                        <div>
                            {viewHistory.map(item=>item.address )},
                            {viewHistory.map(item=>item.city)},
                            {viewHistory.map(item=> item.name )},
                            {viewHistory.map(item=>item.phone)}
                        </div>
                    </div>
                    <div>
                        <h3>
                        {t('mainpages_viewhistory:payment')}
                        </h3>
                        <div>
                        {t('mainpages_viewhistory:payment_method')} {viewHistory.map(item=>item.payment)},
                        {t('mainpages_viewhistory:payment_status')} {viewHistory.map(item=>item.paymentStatus)}
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
                                                                <th>{t('mainpages_viewhistory:quantity')}</th>
                                                                <th>{t('mainpages_viewhistory:total')}</th>
                                                                
                                                            </tr>    
                                                    </thead>
                                                    <tbody className="align-middle">
                                                        {
                                                            viewHistory.map(item=>
                                                                <>
                                                                    
                                                                     {item.cart.map(i=>  
                                                                        <tr key={i._id}>

                                                                            <td>
                                                                                <div className="img">
                                                                                    <Link to={"/product/"+i._id}>
                                                                                    <img src={i.img} alt="Product" />
                                                                                    </Link>
                                                                                    <p><Link to ={"/product/" +i._id}>  {i.name}</Link></p>     
                                                                                </div>
                                                                            </td>
                                                                            <td>${i.price}</td>
                                                                            <td>
                                                                                <div className="qty">
                                                                                    
                                                                                    <input type="text"
                                                                                    value={i.quantity}  />
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                            <td>${i.price * i.quantity}</td>

                                                                        </tr>
                                                                        
                                                                    )}
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
                                    ${viewHistory.map(item=>(
                                        item.cart.map(i=>(i.price*i.quantity).toFixed(2))
                                    )  
                                    )
                                    }
                                </div>
                            
                            
                        </li>
                        <li>
                            
                                <div>
                                {t('mainpages_viewhistory:shipping')}
                                </div>
                                <div>
                                    ${viewHistory.map(item=>item.shiping.toFixed(2) )}
                                </div>
                            
                            
                        </li>
                        <li>
                            
                            <div>
                            {t('mainpages_viewhistory:order_total')}
                            </div>
                            <div>
                                ${viewHistory.map(item=>item.order_subtotal.toFixed(2) )}
                            </div>
                        </li>
                        <li>
                            {
                                <button className="checkout-btn" disabled={c>2}
                                  onClick ={() =>removeOrderHandler(viewHistory.map(item=>item._id ))}>{t('mainpages_viewhistory:delete_orders')}
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
