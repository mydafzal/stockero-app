import * as actionTypes from "./order.constant";
import { BASE_URL } from "../../api/config";
import { store } from "../store";
import axios from "axios";

export const updateRequest = () => {
  return {
    type: actionTypes.UPDATE_REQUEST,
  };
};
export const updateSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_SUCCESS,
    payload: data,
  };
};
export const updateFail = (error) => {
  return {
    type: actionTypes.UPDATE_FAIL,
    payload: error,
  };
};
export const updateOrder = (order_id, status) => {
  return (dispatch) => {
    dispatch(updateRequest());
    axios
      .put(`${BASE_URL}/api/order/status/${order_id}`, {
        status: status,
      })
      .then((res) => {
        dispatch(updateSuccess(res.data.message));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(updateFail(err.response.data.message));
      });
  };
};
