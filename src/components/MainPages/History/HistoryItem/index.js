import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewHistoryGet } from '../../../../actions/orderActions';
import LoadingBox from '../../../Config/LoadingBox';
import MessageBox from '../../../Config/MessageBox';
function HistoryItem({history, loading, error}) {
    const dispatch = useDispatch();
    const HandelViewDetails = (id_order)=>{
        dispatch(viewHistoryGet(id_order));

    }
    console.log(history)
    return (
        <div>
            {loading?(
                        <LoadingBox></LoadingBox>
                        ):
                        error? (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ):(
                            <div className="cart-page">
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
                                                                            <p className="empty-cart-note">Your orders is empty</p>
                                                                            <Link className="empty-cart-shopping" to="/">Go to Shopping</Link>
                                                                        </div>
                                                                    ):
                                                                    <tr>
                                                                        <th>Id order</th>
                                                                        <th>Date</th>
                                                                        <th>Details</th>
                                                                        <th>Total</th>
                                                                        <th>Payment Status</th>
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
                                                                    <td><Link to= {"/view-history/"+ item._id} onClick={()=>HandelViewDetails(item._id)}>View Details</Link></td>
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
