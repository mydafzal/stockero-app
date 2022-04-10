import * as actionTypes from "./product.constant";


const initialState={
    product:{},
    error:false,
    errorMessage:"",
    isLoading:false,
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_SUCCESS:
            return {
                ...state,
                error:false,
                errorMessage:"",
                product:action.payload,
                isLoading:false,
            }
        case actionTypes.ADD_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case actionTypes.ADD_FAIL:
            
            return {
                ...state,
                error:true,
                errorMessage:action.payload,
                isLoading:false,
            }
        default:
            return state;
    }
}