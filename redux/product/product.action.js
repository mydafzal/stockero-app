import * as actionTypes from "./product.constant";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import { store } from "../store";

export const addRequest = () => {
  return {
    type: actionTypes.ADD_REQUEST,
  };
};

export const addSuccess = (data) => {
  return {
    type: actionTypes.ADD_SUCCESS,
    payload: data,
  };
};

export const addFail = (error) => {
  return {
    type: actionTypes.ADD_FAIL,
    payload: error,
  };
};

export const addProduct = (
  productName,
  productDecsription,
  productImage,
  productCategory,
  manufacturer_id
) => {
  return (dispatch) => {
    dispatch(addRequest());
    if (
      productName.length !== 0 &&
      productDecsription.length !== 0 &&
      // productImage.length !== 0 &&
      productCategory.length !== 0
    ) {
      axios
        .post(`${BASE_URL}/api/product/addProduct`, {
          name: productName,
          description: productDecsription,
          img: productImage,
          category: productCategory,
          m_id: manufacturer_id,
        })
        .then((res) => {
          dispatch(addSuccess(res.data));
        })
        .catch((err) => {
          dispatch(addFail(err.response.data.message));
        });
    } else {
      dispatch(addFail("Please fill all details"));
    }
  };
};
