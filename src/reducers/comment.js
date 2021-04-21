import { GET_COMMENT_FAIL, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, UPDATE_RATING_FAIL, UPDATE_RATING_REQUEST, UPDATE_RATING_SUCCESS } from "../constants/comment";



function updateRatingReducer(state={}, action){
    switch(action.type){
        case UPDATE_RATING_REQUEST:
            return {loading : true};
        case UPDATE_RATING_SUCCESS:
            return {loading : false};
        case UPDATE_RATING_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
function getCommentReducer(state={comments:[]}, action){
    switch(action.type){
        case GET_COMMENT_REQUEST:
            return {loading : true};
        case GET_COMMENT_SUCCESS:
            return {loading : false, comments: action.payload};
        case GET_COMMENT_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
export {updateRatingReducer, getCommentReducer}