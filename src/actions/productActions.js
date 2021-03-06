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
    SEARCH_FILTER_PRODUCTS, 
    PRODUCT_LIST_SUCCESS_OF_PAGE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    PRODUCT_LIST_REQUEST_OF_PAGE,
    PRODUCT_LIST_SELLING_REQUEST,
    PRODUCT_LIST_SELLING_FAIL,
    PRODUCT_LIST_SELLING_SUCCESS,
    CHECK_CAN_COMMENT_SUCCESS,
    CHECK_CAN_COMMENT_REQUEST,
    CHECK_CAN_COMMENT_FAIL,
    FILTER_PRODUCTS_BY_CATEGORY_REQUEST,
    FILTER_PRODUCTS_BY_CATEGORY_SUCCESS,
    FILTER_PRODUCTS_BY_CATEGORY_FAIL
} 
from  '../constants/productConstants';
import axios from 'axios'
require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;
const listProductsOfPage = (pageNumber) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST_OF_PAGE});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get(`${url}/product/getproducts/`+ pageNumber);
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS_OF_PAGE, payload: data});
        
    }  
    catch(error){

        //dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }

}
const listProducts = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get(`${url}/products`);
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: PRODUCT_LIST_FAIL, payload: message});
    }

}
const checkCanComment = (id_user, id_product) => async (dispatch) =>{

    try{
        dispatch({type: CHECK_CAN_COMMENT_REQUEST});
         const {data} = await axios.post(`${url}/order/checkcancomment`,{id_user, id_product});
        dispatch({type: CHECK_CAN_COMMENT_SUCCESS, payload: data.message});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CHECK_CAN_COMMENT_FAIL, payload: message});
    }

}
const listProductsSelling = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_SELLING_REQUEST});
         const {data} = await axios.get(`${url}/product/banchay/top10`);
        dispatch({type: PRODUCT_LIST_SELLING_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: PRODUCT_LIST_SELLING_FAIL, payload: message});
    }

}
const searchHeader = (name) => async (dispatch) =>{
    try{
        dispatch({type: SEARCH_REQUEST, payload:name});
         const {data} = await axios.get(`${url}/product/search/s?name=${name}`);
        //console.log(data);
        dispatch({type: SEARCH_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: SEARCH_FAIL, payload:message});
    }

}
const listCategory = () => async (dispatch) =>{
    try{
        dispatch({type: CATEGORY_LIST_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get(`${url}/categorys`);
        //console.log({data});
        dispatch({type: CATEGORY_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CATEGORY_LIST_FAIL, payload: message});
    }

}




const detailsProduct = (id) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: id});
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data });
        //console.log(data)
    }
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: message})
    }
}
const searchFilterProducts  = (products,search) =>  (dispatch) =>{
    
  dispatch({
      type: SEARCH_FILTER_PRODUCTS, 
      payload: {
        search: search,
          items:
          products === ""
              ? products
              : products.filter(
                  (x) => x.name.toLowerCase().includes(search.toLowerCase())
                ) 
        }
       
  }); 
  //console.log(category)
  
}
const filterProducts  = (id,page) => async  (dispatch) =>{
    
    try{
        dispatch({type: FILTER_PRODUCTS_BY_CATEGORY_REQUEST});
         //const {data} =await axios.get("/api/products");
         const {data} = await axios.get(`${url}/product/category/cate?id=${id}&page=${page}`);
        
        dispatch({type: FILTER_PRODUCTS_BY_CATEGORY_SUCCESS, 
                 payload: {category: id,items: data.data, totalPage:data.totalPage}}); 
    } 
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: FILTER_PRODUCTS_BY_CATEGORY_FAIL, payload: message});
    }
        
}

const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };


export {listProducts, detailsProduct,
        filterProducts,
        sortProducts,
        listCategory,
        searchFilterProducts,
        listProductsOfPage,
        searchHeader,
        listProductsSelling,
        checkCanComment
};