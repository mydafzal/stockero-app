import React from 'react'
import { View, Text, Button, Image, StyleSheet, useWindowDimensions, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ForgetPassword = () => {
    const navigation=useNavigation();
    return (
        
            <View style={styles.container}>
            <Text style={styles.Text}>Forget Password Screen</Text>
            </View>
    )
}
export default ForgetPassword;

const styles = StyleSheet.create (
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',

                },
            Text: {
            textAlign: 'center',
            fontSize: 16,
            color: '#FFB344',
            fontFamily: 'Poppins_600SemiBold',
                  },
    })
