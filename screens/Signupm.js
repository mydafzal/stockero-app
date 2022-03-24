import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TouchableButton from '../components/TouchableButton';
import Spacer from '../components/Spacer';
import DropDownPicker from 'react-native-dropdown-picker';
import bg from '../assets/images/bg.png'

const Signupm = () => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
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
                            <Text style={styles.loginText}>Please Provide Following Information</Text>
                            <Spacer height={15} />
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <TextInput
                                    style={styles.inputField}
                                    onChangeText={onChangeText}
                                    value={text}
                                    name={'FactoryName'}
                                    placeholder={'Factory Name'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <TextInput
                                    style={styles.inputField}
                                    keyboardType='number-pad'
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    maxLength={13}
                                    name={'CNIC'}
                                    placeholder={'Provide Your CNIC'}
                                />
                            </View>
                            <Spacer height={10} />
                            <View style={styles.inputFieldCard}>
                                <TextInput
                                    style={styles.inputField}
                                    keyboardType='number-pad'
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    name={'NTN'}
                                    placeholder={'Valid NTN Number'}
                                />
                            </View>
                            <Spacer height={10} />
                            <DropDownPicker style={styles.inputFieldCard}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />

                            <Spacer height={30} />
                            {/* <View> */}
                            <TouchableButton title={'Proceed'} textStyle={{ color: 'white', }} onPress={() => navigation.navigate('Dashboard')} />
                            <Spacer height={10} />

                            {/* </View> */}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default Signupm;

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
            fontSize: 15,
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
            padding: 15,
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