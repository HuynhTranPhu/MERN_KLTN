import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewHistoryGet } from '../../../../actions/orderActions';
//import LoadingBox from '../../../Config/LoadingBox';
import LoadingBackdrop from '../../../Config/LoadingBackdrop';
import MessageBox from '../../../Config/MessageBox';
function HistoryItem({history, loading, error}) {
    const { t } = useTranslation(['mainpages_history']);
    const dispatch = useDispatch();
    const HandelViewDetails = (id_order)=>{
        dispatch(viewHistoryGet(id_order));

    }
    console.log(history)
    return (
        <div>
            {loading?(
                        <>
                            <LoadingBackdrop open={loading}/>
                            <div  style={{height:"150px"}}></div>
                        </>
                        ):
                        error? (
                            <>
                              <MessageBox variant="danger">{error}</MessageBox>
                              <div  style={{height:"150px"}}></div>
                            </>
                           
                        ):(
                            <div className="cart-page my_orders">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12" >
                                            <div className="cart-page-inner">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead className="thead-dark"> 
                                                                {
                                                                    history.length === 0 ?(                                                  
                                                                        <div className="empty-cart">
                                                                            <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" />
                                                                            <p className="empty-cart-note">{t('mainpages_history:empty_order')}</p>
                                                                            <Link className="empty-cart-shopping" to="/">{t('mainpages_history:go_to_shopping')}</Link>
                                                                        </div>
                                                                    ):
                                                                    <tr>
                                                                        <th>{t('mainpages_history:id_order')}</th>
                                                                        <th>{t('mainpages_history:date')}</th>
                                                                        <th>{t('mainpages_history:details')}</th>
                                                                        <th>{t('mainpages_history:total')}</th>
                                                                        <th>{t('mainpages_history:payment_status')}</th>
                                                                        {/* <th>Remove</th> */}
                                                                    
                                                                    </tr>   
                                                                }
                                                                
                                                        </thead>
                                                        <tbody className="align-middle">
                                                            {
                                                                history.map(item=>
                                                                <tr key={item._id}>
                                                                    <td>{item._id}</td>
                                                                    <td>{item.order_date.substring(0, 10)}</td>  
                                                                    <td><Link to= {"/view-history/"+ item._id} onClick={()=>HandelViewDetails(item._id)}>{t('mainpages_history:view_details')}</Link></td>
                                                                    <td>${item.order_subtotal }</td>
                                                                    <td>{item.paymentStatus}</td>
                                                                </tr>)
                                                            }
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }        
        </div>
    )
}

export default HistoryItem
