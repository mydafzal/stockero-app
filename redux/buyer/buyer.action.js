import * as actionTypes from './buyer.constant';
import { BASE_URL } from '../../api/config';
import axios from 'axios';
import { store } from '../store';

export const signInRequest = () => {
    return {
        type: actionTypes.SIGN_IN_REQUEST,
    };
};

export const SignInSuccess = (data) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: data,
    };
};

export const SignInFail = (error) => {
    return {
        type: actionTypes.SIGN_IN_FAIL,
        payload: error,
    };
};

export const signIn=(email,password)=>{
    const role=store.getState().buyer.role;
    return dispatch=>{
        dispatch(signInRequest());
    if(email.length!==0 && password.length!==0){
        axios.post(`${BASE_URL}/api/${role}/signin`,{
            email,
            password
            })
            .then(res=>{
                dispatch(SignInSuccess(res.data))
            }).catch((err)=>{
                console.log(err);
                dispatch(SignInFail(err.message))
                
                
            })
    } else{
        dispatch(SignInFail("Please enter email and password"))
    }
}
}
export const signOut=()=>{
    return {
        type:actionTypes.SIGN_OUT
    }
}

export const SignUpSuccess=(data)=>{
    return {
        type:actionTypes.SIGN_UP_SUCCESS,
        payload:data
    }
}

export const SignUpRequest=()=>{
    return {
        type:actionTypes.SIGN_UP_REQUEST
    }
}

export const SignUpFail=(error)=>{
    return {
    type:actionTypes.SIGN_UP_FAIL,
    payload:error
    }

}

export const SignUp=(firstName,lastName,email,password)=>{
    const role=store.getState().buyer.role;
    return (dispatch)=>{
        dispatch(SignUpRequest());
        if(firstName.length!==0&& lastName.length!==0 && email.length!==0 && password.length!==0){
            axios.post(`${BASE_URL}/api/${role}/register`,{
                firstname:firstName,
                lastname:lastName,
                email:email,
                password:password}).then((res)=>{
                    dispatch(SignUpSuccess(res.data))
                }).catch((err)=>{
                    dispatch(SignUpFail(err.response.data.message))
                })
        } else{
            dispatch(SignUpFail("Please enter all fields"))
        }
    }
}

export const setRole=(role)=>{
    return {
        type:actionTypes.SET_ROLE,
        payload:{
            role:role,
        }
    }
}