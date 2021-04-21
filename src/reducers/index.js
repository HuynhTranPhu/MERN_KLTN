import { combineReducers} from 'redux';
import { cartGetReducer, cartPostReducer, cartReducer, decreaseCartReducer, increaseCartReducer, removeCartPostReducer } from './cartReducers';
import { historyReducer, orderPostReducer, removeOrderReducer, viewHistoryReducer } from './orderReducers';
import { categoryListReducer, productDetailsReducer, productListReducer, searchHeaderReducer } from './productReducers';
import { forgotPasswordReducer, userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdatePasswordReducer, userUpdateProfileReducer } from './userReducers';
import { getCommentReducer, updateRatingReducer } from './comment';


const reducer = combineReducers({
    productList : productListReducer,
    categoryList: categoryListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    updateRating: updateRatingReducer,
    getComments: getCommentReducer,

    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userUpdatePassword:userUpdatePasswordReducer,
    forgotPassword:forgotPasswordReducer,

    cartPost:cartPostReducer,
    cartGet:cartGetReducer,
    removeCartPost:removeCartPostReducer,
    increaseCart: increaseCartReducer,
    decreaseCart: decreaseCartReducer,
    orderPost: orderPostReducer,
    historyOrder: historyReducer,
    viewHistoryOrder: viewHistoryReducer,
    removeOrder: removeOrderReducer,
    searchHeader:searchHeaderReducer,
});
export default reducer;