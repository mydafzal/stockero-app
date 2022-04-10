import * as actionTypes from "./manufacturer.constant";


const initialState={
    token:"",
    user:{},
    error:false,
    errorMessage:"",
    isLoading:false,
}

export const manufacturerReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                user:action.payload.data,
                error:false,
                errorMessage:"",
                isLoading:false,
            }
        case actionTypes.REGISTER_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                error:true,
                errorMessage:action.payload,
                isLoading:false,
            }
            case actionTypes.SIGN_OUT:
                return {
                    ...state,
                    user:{},
                    token:"",
                    error:false,
                    errorMessage:"",
                    isLoading:false,
                    
                }
        default:
            return state;

        }
}