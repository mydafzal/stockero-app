import * as actionTypes from "./manufacturer.constant";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import { store } from "../store";

export const registerSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerRequest = () => {
  return {
    type: actionTypes.REGISTER_REQUEST,
  };
};

export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    payload: error,
  };
};
export const signOut=()=>{
    return {
        type:actionTypes.SIGN_OUT
    }
};
export const register = (fullName, email, password, factoryName, ntn, cnic) => {
  return (dispatch) => {
    dispatch(registerRequest());
    if (
      fullName.length !== 0 &&
      factoryName.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      ntn.length !== 0 &&
      cnic.length !== 0
    ) {
      axios
        .post(`${BASE_URL}/api/manufacturer/register`, {
            name: fullName,
            email: email,
            password: password,
            address: factoryName,
            ntn: ntn,
            CNIC: cnic,
        })
        .then((res) => {
          dispatch(registerSuccess(res.data));
        })
        .catch((err) => {
          dispatch(registerFail(err.response.data.message));
        });
    } else {
      dispatch(registerFail("Please enter all fields"));
    }
  };
};
