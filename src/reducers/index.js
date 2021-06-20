import { combineReducers} from 'redux';
import { 
        //addAddressReducer, 
        cartGetReducer,
        //cartPostReducer,
        decreaseCartReducer,
        increaseCartReducer, 
        removeCartPostReducer 
} from './cartReducers';
import { getOrderByTypeReducer, historyReducer,
        orderPostReducer, 
        removeOrderReducer,
        viewHistoryReducer 
} from './orderReducers';
import {productListSellingReducer,
        categoryListReducer,
        productDetailsReducer, 
        productListReducer,
        searchHeaderReducer, 
        checkCanCommentReducer 
} from './productReducers';
import { forgotPasswordReducer,
        userDetailsReducer, 
        userLoginReducer, 
        userRegisterReducer, 
        userUpdatePasswordReducer,
        userUpdateProfileReducer 
} from './userReducers';
import { getCommentReducer, updateRatingReducer } from './comment';
import { checkPromotionReducer, getBannerReducer, getPromoCodeReducer } from './promotionReducers';


const reducer = combineReducers({
    productList : productListReducer,

    productListSelling : productListSellingReducer,

    checkComment:checkCanCommentReducer,
    checkPromotion:checkPromotionReducer,

    categoryList: categoryListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    updateRating: updateRatingReducer,
    getComments: getCommentReducer,

    getPromoCodes: getPromoCodeReducer,
    getBanners:getBannerReducer,

    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userUpdatePassword:userUpdatePasswordReducer,
    forgotPassword:forgotPasswordReducer,

    //addAddressState:addAddressReducer,

    //cartPost:cartPostReducer,
    cartGet:cartGetReducer,
    removeCartPost:removeCartPostReducer,
    increaseCart: increaseCartReducer,
    decreaseCart: decreaseCartReducer,
    orderPost: orderPostReducer,

    historyOrder: historyReducer,
    getOrdersByType: getOrderByTypeReducer,
    
    viewHistoryOrder: viewHistoryReducer,
    removeOrder: removeOrderReducer,
    searchHeader:searchHeaderReducer,
});
export default reducer;