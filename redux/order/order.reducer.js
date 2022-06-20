import * as actionTypes from "./order.constant";

const initialState = {
  order: {},
  error: false,
  errorMessage: "",
  isLoading: false,
  isSuccess:false,
  successMessage:"",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SUCCESS:
      return {
        ...state,
        error: false,
        errorMessage: "",
        successMessage:action.payload,
        isLoading: false,
        isSuccess:true,
      };
    case actionTypes.ADD_REQUEST:
      console.log("ADD_REQUEST");
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ADD_FAIL:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
