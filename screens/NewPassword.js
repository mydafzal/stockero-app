import React, { version } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TouchableButton from '../components/TouchableButton';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/images/bg.png'
const NewPassword = () => {
    const navigation = useNavigation();
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
                            <Text style={styles.loginText}>Forgot Password</Text>
                            <Spacer height={25} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='lock-closed' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'Password'}
                                  
                                    secureTextEntry={true}
                                    placeholder={'New Password'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='lock-closed' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'Password'}
                                    
                                    secureTextEntry={true}
                                    placeholder={'Confirm Password'}
                                />
                            </View>
                            <Spacer height={20} />
                            <TouchableButton title={'Confirm'} textStyle={{ color: 'white', }} onPress={() => navigation.navigate('accountselector')} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default NewPassword;

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
        title: {
            //flex: 0.5,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            // top: '20%',

        },
        loginText: {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 20,
            color: '#454545',
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

        inputField: {
            width: '100%',
            padding: 10,
            fontFamily: 'Poppins_400Regular',
            fontSize: 10,

        },
        inputFieldName: {
            width: '40%',
            padding: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(216, 216, 216, 255)",
            backgroundColor: "rgba(245, 245, 245, 255)"
        }

    })