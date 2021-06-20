import axios from "axios";
import { CHECK_PROMOTION_FAIL, CHECK_PROMOTION_REQUEST, CHECK_PROMOTION_SUCCESS, GET_BANNER_FAIL, GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_PROMO_CODE_FAIL, GET_PROMO_CODE_REQUEST, GET_PROMO_CODE_SUCCESS } from "../constants/promotionContants";

require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;


const getPromoCode = () => async (dispatch) =>{
    dispatch({type: GET_PROMO_CODE_REQUEST});
        try{
            const {data} = await axios.get(`${url}/promocodes`);
            dispatch({type:GET_PROMO_CODE_SUCCESS,payload:data});
        }catch(error){
            const message=
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:GET_PROMO_CODE_FAIL,payload:message});
        }  
}
const checkPromotionCode = (id_user, promotion_code) => async (dispatch) =>{

    try{
        dispatch({type: CHECK_PROMOTION_REQUEST});
        //const { userLogin :{userInfo}}= getState();
         const {data} = await axios.post(`${url}/promocodes/check`,{id_user, promotion_code}
        //  ,{
        //     headers: {Authorization:`${userInfo.token}`},
        //  }
         );
        dispatch({type: CHECK_PROMOTION_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: CHECK_PROMOTION_FAIL, payload: message});
    }

}


/*Banner**/

const getBanner = () => async (dispatch) =>{
    dispatch({type: GET_BANNER_REQUEST});
        try{
            const {data} = await axios.get(`${url}/banners`);
            dispatch({type:GET_BANNER_SUCCESS,payload:data});
        }catch(error){
            const message=
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:GET_BANNER_FAIL,payload:message});
        }  
}

export {getPromoCode, checkPromotionCode, getBanner}