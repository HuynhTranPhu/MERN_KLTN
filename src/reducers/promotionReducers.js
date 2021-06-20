import { CHECK_PROMOTION_FAIL,
         CHECK_PROMOTION_REQUEST, 
         CHECK_PROMOTION_SUCCESS, 
         GET_BANNER_FAIL, 
         GET_BANNER_REQUEST, 
         GET_BANNER_SUCCESS, 
         GET_PROMO_CODE_FAIL, 
         GET_PROMO_CODE_REQUEST, 
         GET_PROMO_CODE_SUCCESS } 
from "../constants/promotionContants";

function getPromoCodeReducer(state={promoCodes:[]}, action){
    switch(action.type){
        case GET_PROMO_CODE_REQUEST:
            return {loadingPromotion : true};
        case GET_PROMO_CODE_SUCCESS:
            return {loadingPromotion : false, promoCodes: action.payload};
        case GET_PROMO_CODE_FAIL:
            return {loadingPromotion : false, error : action.payload};
        default : return state;
    }
}
function checkPromotionReducer (state = { checkPromotions:{} }, action){
    switch(action.type){
        case CHECK_PROMOTION_REQUEST:
            return {loading: true};
        case  CHECK_PROMOTION_SUCCESS:
            return { loading : false , checkPromotions: action.payload};
        case CHECK_PROMOTION_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function getBannerReducer(state={banners:[]}, action){
    switch(action.type){
        case GET_BANNER_REQUEST:
            return {loading : true};
        case GET_BANNER_SUCCESS:
            return {loading : false, banners: action.payload};
        case GET_BANNER_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
export {getPromoCodeReducer, checkPromotionReducer ,getBannerReducer}