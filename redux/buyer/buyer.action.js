import * as actionTypes from './buyer.constant';
import { BASE_URL } from '../../api/config';


export const signIn=(email,password)=>{
    try{

        return async dispatch=>{
            if(email.length>0 && password.length>0){

                axios.post(`${BASE_URL}/buyer/register`,{email,password}).then((res)=>{
                    if(res.data.status){
                        alert(res.data.status) //true
                        dispatch({
                            type:actionTypes.SIGN_IN,
                            payload:{
                                token:res.data.token,
                                user:res.data.user
                            }
                        })
                    } else{
                        dispatch({
                            type:actionTypes.SIGN_IN_FAIL,
                            payload:'Invalid email or password'
                        })
                    }
                }).catch((err)=>{
                    dispatch({
                        type:actionTypes.SIGN_IN_FAIL,
                        payload:err.response.data.message
                    })
                }
                )
            } else{
                dispatch({
                    type:actionTypes.SIGN_IN_FAIL,
                    payload:'Complete Data not provided'
                })
            }
        }
    } catch(err){
        console.log(err);
    }
       
        
    
    
    
}