import * as actionTypes from "./request.constant";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import { store } from "../store";

export const addRequest = (data) => {
  return {
    type: actionTypes.ADD_REQUEST,
    payload: data,
  };
};

export const requestSuccess = (data) => {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    payload: data,
  };
};

export const requestFail = (error) => {
  return {
    type: actionTypes.REQUEST_FAIL,
    payload: error,
  };
};

// export const AddRequest = ( data) => {
//   return (dispatch) => {
//       console.log(data)
//       axios
//         .post(`${BASE_URL}/api/request/create`, data, headers)
//         .then((res) => {
//           console.log(res.data);
//         })
//         .catch((err) => {
//           dispatch(requestFail(err.response.data.message));
//         });
//     }
//   };
export const AddRequest = (
  buyer_id,
  name,
  description,
  quantity,
  asking_days,
  asking_price
) => {
  return (dispatch) => {
    console.log(1);

    if (name.length !== 0 && description.length !== 0) {
      console.log(1);
      axios
        .post(`${BASE_URL}/api/request/create`, {
          buyer_id: buyer_id,
          name: name,
          description: description,
          quantity: quantity,
          asking_days: asking_days,
          asking_price: asking_price,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(requestSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(requestFail(err.response.data.message));
        });
    } else {
      dispatch(requestFail("Please fill all details"));
    }
  };
};

export const GetRequests = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/api/request`)
      .then((res) => {
        dispatch(addRequest(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(requestFail(err.response.data.message));
      });
  };
};
