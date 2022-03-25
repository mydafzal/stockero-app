import axios from "axios";
import { ToastAndroid ,Platform} from "react-native";
// import Toast from "react-native-root-toast";

const BASE_URL= "https://stockero-app.herokuapp.com"

export const userLogin=(email,password,navigation)=>{
    if(email.length>0&&password.length>0){
        const body={email:email,password:password};
        axios.post(`${BASE_URL}/user/authentication/login`,body).then((res)=>{
            console.log(res.data);
            navigation.navigate('Dashboard')
        }).catch((err)=>{
            console.log(err.response);
        })
    } else{
        // if(Platform.OS!='android'){
        //     Snackbar.show({
        //         text:'Please provide login details',
        //         duration:Snackbar.LENGTH_LONG
        //     });
        // } else{
        // ToastAndroid.show("Please provide login details",ToastAndroid.LONG);
        // }
        // Toast.show(
        //     "Please provde login details",{
        //     duration:Toast.durations.LONG,
        // });
    }
}
