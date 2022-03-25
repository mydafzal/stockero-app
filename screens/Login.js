import React, { useState, useContext } from 'react';
import { View, Text,ViewPropTypes, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, ActivityIndicator ,Platform} from 'react-native';
import TouchableButton from '../components/TouchableButton';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/images/bg.png'
import axios from 'axios';
const { height, width } = Dimensions.get("window");
import { userLogin } from '../api/user.api';

const Login = () => {
    const navigation = useNavigation();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        userLogin(email,password,navigation);
        
    }
      

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ImageBackground
                source={bg}
                style={styles.container}
            >
                <View style={styles.outerbody}>

                    <View style={styles.body}>
                        <View style={styles.title}>
                            <Text style={styles.loginText}>LOGIN</Text>
                            <Spacer height={15} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='mail' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'email'}
                                    value={email}
                                    onChangeText={e=>setEmail(e)}
                                    placeholder={'Enter your email'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='lock-closed' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'Paswword'}
                                    value={password}
                                    onChangeText={e=>setPassword(e)}
                                    secureTextEntry={true}
                                    placeholder={'**********'}
                                />
                            </View>
                        
                            <Spacer height={10} />
                            <Text style={{ color: '#9A9A9A', fontSize: 12, alignSelf: 'flex-end', marginRight: 45, fontFamily: 'Poppins_400Regular' }} onPress={() => navigation.navigate('ForgetPassword')}>
                                Forgot your Password?
                            </Text>
                            <Spacer height={30} />
                            <TouchableButton title={'Login'} textStyle={{ color: 'white' }} onPress={handleSubmit} />
                            <Spacer height={10} />
                            <Text style={{ color: '#9A9A9A', fontSize: 12, textAlign: 'center', fontFamily: 'Poppins_400Regular' }}>
                                Don't have and account?
                                <Text style={{ color: '#454545', fontFamily: 'Poppins_500Medium' }} onPress={() => navigation.navigate('Signup')}> SIGN UP</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default Login;

const styles = StyleSheet.create(
    {

        container: {
            paddingTop: 5,
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            resizeMode: "contain",
            margin: 0,
        },
        outerbody: {
            display: "flex",
            width: "100%",
            height: "100%",
            // padding: "3%",
        },
        body: {
            padding: "5%",
            flex: 8,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        details: {
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",

        },

        title: {
            width: '100%',
            // justifyContent: 'flex-start',
            alignItems: 'center',
            // top: '30%',

        },
        loginText: {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 40,
            color: '#454545',
        },
        inputField: {
            // flexDirection: 'row',
            padding: 10,
            width: '100%',
            fontFamily: 'Poppins_400Regular',
            fontSize: 10,

        },
        inputFieldCard:
        {
            flexDirection: 'row',
            alignSelf: 'center',
            // paddingStart: 18.5,
            //paddingTop: 23,
            width: '80%',
            height: 60,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(216, 216, 216, 255)",
            backgroundColor: "rgba(245, 245, 245, 255)"
        },

        img: {
            height: '100%',
            width: '100%'
        }

    })