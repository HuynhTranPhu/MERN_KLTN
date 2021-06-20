import axios from 'axios'
import Cookie from 'js-cookie';
import {
    CART_SAVE_PAYMENT, 
    CART_SAVE_SHIPPING, 
    CART_ADD_POST_REQUEST,
    CART_ADD_POST_SUCCESS,
    CART_ADD_POST_FAIL,
    CART_REMOVE_POST_SUCCESS,
    CART_REMOVE_POST_FAIL,
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_INCREASE_REQUEST,
    CART_INCREASE_SUCCESS,
    CART_INCREASE_FAIL,
    CART_DECREASE_REQUEST,
    CART_DECREASE_FAIL,
    CART_DECREASE_SUCCESS,
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAIL} 
    from '../constants/cartConstants';
import {detailsUser} from './userAction';
require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;


const saveShipping =(data) => (dispatch) =>{
    dispatch({type:CART_SAVE_SHIPPING, payload:data});
    Cookie.set("shipping", JSON.stringify(data));
}
const addAddress = (id,address) => async (dispatch,getState) =>{
    dispatch({type: ADD_ADDRESS_REQUEST, payload:{id, address}});
    //console.log(id,address);
    //const { userLogin :{userInfo}}= getState();
    try{
        const {data} = await axios.post( `${url}/address/add`, {id,address}
        // ,{
        //     headers: {Authorization:`${userInfo.token}`},
        // }
        );
        dispatch({type:ADD_ADDRESS_SUCCESS,payload:data});   
        dispatch(detailsUser(id));   
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:ADD_ADDRESS_FAIL,payload:message});
    }
}
const savePayment =(data) => (dispatch) =>{
    dispatch({type:CART_SAVE_PAYMENT, payload:data});
    Cookie.set("payment", JSON.stringify(data));
}
const addCart = (id_user,products) => async (dispatch,getState) =>{
    dispatch({type: CART_ADD_POST_REQUEST, payload:{id_user, products}});
    //console.log(id_user,products);
    const { userLogin :{userInfo}}= getState();
    try{
        const {data} = await axios.post( `${url}/cart/addcart`, {id_user,products}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_ADD_POST_SUCCESS,payload:data});
        dispatch(getCart(id_user));
      
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_ADD_POST_FAIL,payload:message});
    }
}
const getCart = (id_user) => async (dispatch, getState ) =>{
    dispatch({type: CART_LIST_REQUEST,payload: id_user});
    const { userLogin :{userInfo}}= getState();
    try{
         const {data} = await axios.get(`${url}/cart/`+id_user,{
            headers: {Authorization:`${userInfo.token}`}
         });
         //console.log(data);
        dispatch({type: CART_LIST_SUCCESS, payload: data});
        const {cartGet: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CART_LIST_FAIL, payload: message});
    }

}
const removeCart = (id_user,id_product, color,size) => async (dispatch, getState) =>{
    const { userLogin :{userInfo}}= getState();
    try{
        dispatch({type:CART_REMOVE_POST_SUCCESS,payload:{id_user,id_product, color,size}});
        const {data} = await axios.put(`${url}/cart/remove`, {id_user,id_product, color,size}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch(getCart(id_user));
        Cookie.remove('cartItems');
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_REMOVE_POST_FAIL,payload:message});
    }
}
const increaseCart = (id_user,id_product ,color,size) => async (dispatch, getState) =>{
    dispatch({type: CART_INCREASE_REQUEST, payload:{id_user,id_product, color,size}});
    const { userLogin :{userInfo}}= getState();
    //console.log(id_user,id_product);
    try{
        //console.log({id_product,id_user});
        const {data} = await axios.put(`${url}/cart/updatetang`, {id_user,id_product, color,size}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_INCREASE_SUCCESS,payload:data, success:true});
        dispatch(getCart(id_user));
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_INCREASE_FAIL,payload:message});
    }
}
const decreaseCart = (id_user,id_product, color,size) => async (dispatch, getState) =>{
    dispatch({type: CART_DECREASE_REQUEST, payload:{id_user,id_product, color,size}});
    const { userLogin :{userInfo}}= getState();
    try{
        
        const {data} = await axios.put(`${url}/cart/updategiam`, {id_user,id_product, color,size}
        ,{
            headers: {Authorization:`${userInfo.token}`},
        }
        );
        dispatch({type:CART_DECREASE_SUCCESS,payload:data, success:true});
        dispatch(getCart(id_user));
        
    }catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type:CART_DECREASE_FAIL,payload:message});
    }
}
export { 
      saveShipping
     ,savePayment
     ,addCart
     ,getCart
     ,removeCart
     ,increaseCart
     ,decreaseCart
     ,addAddress
};