import axios from "axios";
import { GET_COMMENT_FAIL, 
    GET_COMMENT_REQUEST, 
    GET_COMMENT_SUCCESS, 
    UPDATE_RATING_FAIL, 
    UPDATE_RATING_REQUEST, 
    UPDATE_RATING_SUCCESS } from "../constants/comment";

require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;

const updateRating = (id, rating) => async (dispatch) =>{
    dispatch({type: UPDATE_RATING_REQUEST, payload:{id, rating}});
        try{
            const {data} = await axios.patch(`${url}/updateRate/${id}`, {rating});
            dispatch({type:UPDATE_RATING_SUCCESS,payload:data});
            //console.log(data)
        }catch(error){
            const message=
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:UPDATE_RATING_FAIL,payload:message});
        }  
}
const getComment = (id) => async (dispatch) =>{
    dispatch({type: GET_COMMENT_REQUEST, payload:{id}});
        try{
            const {data} = await axios.get(`${url}/comment/${id}`);
            dispatch({type:GET_COMMENT_SUCCESS,payload:data});
            console.log(data)
        }catch(error){
            const message=
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:GET_COMMENT_FAIL,payload:message});
        }  
}
export {updateRating, getComment}