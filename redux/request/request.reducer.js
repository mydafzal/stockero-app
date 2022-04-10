import * as actionTypes from "./request.constant";

const initialState = {
  token: "",
  offers: [],
  data: {},
  error: false,
  errorMessage: "",
  isLoading: false,
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        data: action.payload.data,
        error: false,
        errorMessage: "",
        isLoading: false,
      };
    case actionTypes.ADD_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.ADD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case actionTypes.REQUEST_FAIL:
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
