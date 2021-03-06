import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL, 
    ORDER_PRODUCTS_BY_PRICE,
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL, 
    PRODUCT_LIST_SUCCESS_OF_PAGE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    PRODUCT_LIST_REQUEST_OF_PAGE,
    PRODUCT_LIST_SELLING_REQUEST,
    PRODUCT_LIST_SELLING_SUCCESS,
    PRODUCT_LIST_SELLING_FAIL,
    CHECK_CAN_COMMENT_REQUEST,
    CHECK_CAN_COMMENT_SUCCESS,
    CHECK_CAN_COMMENT_FAIL,
    FILTER_PRODUCTS_BY_CATEGORY_REQUEST,
    FILTER_PRODUCTS_BY_CATEGORY_SUCCESS,
    FILTER_PRODUCTS_BY_CATEGORY_FAIL
} from "../constants/productConstants";

//List product
function productListReducer (state = { products: [],filteredItems: [], cate: "",sort: "",numberOfPages:0}, action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]};
        case PRODUCT_LIST_REQUEST_OF_PAGE:
            return {loading: true, filteredItems:[]};
        case FILTER_PRODUCTS_BY_CATEGORY_REQUEST:
            return {loading: true, filteredItems:[]};
        case  PRODUCT_LIST_SUCCESS:
            return { loading : false , products: action.payload, filteredItems:action.payload};
        case  PRODUCT_LIST_SUCCESS_OF_PAGE:
            return { loading : false, filteredItems:action.payload.data,numberOfPages:action.payload.totalPage};
        case  FILTER_PRODUCTS_BY_CATEGORY_SUCCESS:
            return { loading : false ,filteredItems:action.payload.items,numberOfPages:action.payload.totalPage,
                cate: action.payload.category};
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                    ...state,
                    filteredItems: action.payload.items,
                    sort: action.payload.sort,
                };
        case PRODUCT_LIST_FAIL:
            return { loading : false, error: action.payload}
        case FILTER_PRODUCTS_BY_CATEGORY_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
//List product selling
function productListSellingReducer (state = { productSelling: []}, action){
    switch(action.type){
        case PRODUCT_LIST_SELLING_REQUEST:
            return {loading: true, productSelling:[]};
        case  PRODUCT_LIST_SELLING_SUCCESS:
            return { loading : false , productSelling: action.payload.data};
        case PRODUCT_LIST_SELLING_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function checkCanCommentReducer (state = { checkStatus:{} }, action){
    switch(action.type){
        case CHECK_CAN_COMMENT_REQUEST:
            return {loadingComment: true};
        case  CHECK_CAN_COMMENT_SUCCESS:
            return { loadingComment : false , checkStatus: action.payload};
        case CHECK_CAN_COMMENT_FAIL:
            return { loadingComment : false, error: action.payload}
        default:
            return state;
    }
}
//Category List
function categoryListReducer(state={category:[]},action){
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return {loading: true, category:[]};
        case  CATEGORY_LIST_SUCCESS:
            return { loading : false , category: action.payload.data};
    
        case CATEGORY_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
function searchHeaderReducer(state={productSearch:[]},action){
    switch(action.type){
        case SEARCH_REQUEST:
            return {loading: true, productSearch:[]};
        case  SEARCH_SUCCESS:
            return { loading : false , productSearch: action.payload.data};
    
        case SEARCH_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
// Detail products
function productDetailsReducer (state = { product: {}}, action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading2: true};
        case  PRODUCT_DETAILS_SUCCESS:
            return { loading2: false , product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return { loading2: false, error: action.payload}
        default:
            return state;
    }
}



export {productListReducer,
        productListSellingReducer,
        productDetailsReducer,
        categoryListReducer,
        searchHeaderReducer,
        checkCanCommentReducer
}