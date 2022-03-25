import React from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TouchableButton from '../components/TouchableButton';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/images/bg.png'

const Signup = () => {
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
                            <Text style={styles.loginText}>SIGN UP</Text>
                            <Spacer height={15} />
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='person' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'FirstName'}
                                    placeholder={'First Name'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='person' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'LastName'}
                                    placeholder={'Last Name'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='mail' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'email'}
                                    placeholder={'Enter your email'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <Ionicons name='lock-closed' size={17} color='#9A9A9A' style={{ alignSelf: 'center', paddingLeft: 15 }} />
                                <TextInput
                                    style={styles.inputField}
                                    name={'Paswword'}
                                    placeholder={'**********'}
                                />
                            </View>
                            <Spacer height={30} />
                            {/* <View> */}
                            <TouchableButton title={'Proceed'} textStyle={{ color: 'white', }} onPress={() => navigation.navigate('accountselector')} />
                            <Spacer height={10} />
                            <Text style={{ color: '#9A9A9A', fontSize: 12, textAlign: 'center', fontFamily: 'Poppins_400Regular' }}>
                                Already have an account?
                                <Text style={{ color: '#454545', fontFamily: 'Poppins_500Medium' }} onPress={() => navigation.navigate('Login')}> SIGN IN</Text>
                            </Text>
                            {/* </View> */}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default Signup;

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
        loginText: {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 40,
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