import * as actionTypes from "./buyer.constant";


const initialState={
    token:null,
    user:null,
    error:false,
    errorMessage:"",
    role:"buyer",
    isLoading:false,
}

export const buyerReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                user:action.payload.user,
                error:false,
                errorMessage:"",
                isLoading:false,
            }
        case actionTypes.SIGN_IN_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case actionTypes.SIGN_IN_FAIL:
            
            return {
                ...state,
                error:true,
                errorMessage:action.payload,
                isLoading:false,
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                user:action.payload.user,
                error:false,
                errorMessage:"",
                isLoading:false,
            }
        case actionTypes.SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                error:true,
                errorMessage:action.payload,
                isLoading:false,
            }

        case actionTypes.SET_ROLE:
            return {
                ...state,
                role:action.payload.role
            }
        default:
            return state;
    }
}