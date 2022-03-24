import React from 'react'
import { View, Text, TextInput, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/images/mob-logo.png';
import Colors from '../constants/Colors';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.helpIcon}>
                <Image source={Logo} style={{
                    width: win.width / 3,
                    height: win.width / 7,
                    resizeMode: "contain",
                }}>
                </Image>

                <Ionicons name='call' size={30} color='#ffffff' />
            </View>
        </View>
    );
};
export default Header;

const styles = StyleSheet.create(
    {

        header: {
            width: "100%",
            height: "26%",
            backgroundColor: Colors.primary,

        },

        helpIcon: {
            alignSelf: 'flex-end',
            paddingRight: 35,
            alignSelf: 'center',
            justifyContent: 'space-between',
        },

        logo: {
            width: "80%",
            height: "100%",
            alignSelf: 'flex-start',
        }

    })