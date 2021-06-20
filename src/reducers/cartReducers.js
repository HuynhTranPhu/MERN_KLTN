import {CART_SAVE_PAYMENT, CART_SAVE_SHIPPING, CART_ADD_POST_FAIL, CART_ADD_POST_SUCCESS, CART_ADD_POST_REQUEST, CART_REMOVE_POST_REQUEST, CART_REMOVE_POST_SUCCESS, CART_REMOVE_POST_FAIL, CART_LIST_REQUEST, CART_LIST_SUCCESS, CART_LIST_FAIL, CART_INCREASE_REQUEST, CART_INCREASE_SUCCESS, CART_INCREASE_FAIL, CART_DECREASE_REQUEST, CART_DECREASE_SUCCESS, CART_DECREASE_FAIL, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_FAIL } from "../constants/cartConstants";
import { CART_EMPTY } from "../constants/orderContants";


// cart in the screen
function cartReducer(state ={}, action){

    switch(action.type){
        case CART_SAVE_SHIPPING:
            return {...state, shipping:action.payload}
        case CART_SAVE_PAYMENT:
            return {...state, payment:action.payload}
        // case CART_EMPTY:
        //     return {...state, cartItems:[]};
        default:
                return state
    }
}
//add cart in database
function cartPostReducer(state={}, action){
    switch(action.type){
        case CART_ADD_POST_REQUEST:
            return {loading : true};
        case CART_ADD_POST_SUCCESS:
            return {loading : false, success:true};
        case CART_ADD_POST_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
//add address in database
function addAddressReducer(state={}, action){
    switch(action.type){
        case ADD_ADDRESS_REQUEST:
            return {loading : true};
        case ADD_ADDRESS_SUCCESS:
            return {loading : false, success:true};
        case ADD_ADDRESS_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
//Get cart
function cartGetReducer (state = { cartItems: [], shipping:{},payment:{}}, action){
    switch(action.type){
        case CART_LIST_REQUEST:
            return {loading: true, cartItems:[]};
        case  CART_LIST_SUCCESS:
            return { loading : false , cartItems: action.payload};
        case CART_SAVE_SHIPPING:
            return {...state, shipping:action.payload}
        case CART_SAVE_PAYMENT:
            return {...state, payment:action.payload}
        case CART_EMPTY:
            return {...state, cartItems:[]};
        case CART_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
///Delete cart in database
function removeCartPostReducer(state={}, action){
    switch(action.type){
        case CART_REMOVE_POST_REQUEST:
            return {loading : true};
        case CART_REMOVE_POST_SUCCESS:
            return {loading : false, success : true};
        case CART_REMOVE_POST_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
//Increase quantity in Cart
function increaseCartReducer(state={}, action){
    switch(action.type){
        case CART_INCREASE_REQUEST:
            return {loading : true};
        case CART_INCREASE_SUCCESS:
            return {loading : false, success : true};
        case CART_INCREASE_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
//Decrease quantity in Cart
function decreaseCartReducer(state={}, action){
    switch(action.type){
        case CART_DECREASE_REQUEST:
            return {loading : true};
        case CART_DECREASE_SUCCESS:
            return {loading : false, success : true};
        case CART_DECREASE_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}

export {cartReducer
     ,cartPostReducer
     ,cartGetReducer
     , removeCartPostReducer
     ,increaseCartReducer
     ,decreaseCartReducer
     ,addAddressReducer
}