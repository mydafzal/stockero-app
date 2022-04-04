import * as actionTypes from "./buyer.constant";


const initialState={
    token:null,
    user:null,
    error:null,
}

export const buyerReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SIGN_IN:
            return {
                ...state,
                token:action.payload.token,
                user:action.payload.user,
                error:null
            }
        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                error:action.payload
            }
        case actionTypes.REGISTER_BUYER:
            return {}
        
        default:
            return state;
    }
}