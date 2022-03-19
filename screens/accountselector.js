import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, Image } from 'react-native';
import headerart from '../assets/images/headerart.png';
import TouchableButton from '../components/TouchableButton';
import bg from '../assets/images/bg.png'
import manu from '../assets/images/manufacturer.png'
import buyer from '../assets/images/customer.png'
import Colors from '../constants/Colors';
import Spacer from '../components/Spacer';
import Icon from '../constants/Icons';

const accountselector=({ navigation }) => {
    return (
        <ImageBackground
        source={bg}
        style={styles.container}
    >
        <View style={styles.outerbody}>

            <View style={styles.body}>
            <Text style={styles.title}>Please Select</Text>
            <Spacer height={10} />
                <View style={styles.selectorbox}>
                    <Image 
                    source={manu}
                    style={styles.imageStyle}>
                    </Image>
                    <Text style={styles.textStyle}>Manufacturer</Text>
                </View>
                <Spacer height={10} />
                <View style={styles.selectorbox}>
                    <Image 
                    source={buyer}
                    style={styles.imageStyle}>
                    </Image>
                    <Text style={styles.textStyle}>Buyer</Text>
                </View>

                </View>
                </View>
            </ImageBackground>
              
    );
}
export default accountselector;
const styles = StyleSheet.create({
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
                // top: '35%',
                // alignSelf:'center', 
                fontFamily:'Poppins_600SemiBold', 
                fontSize:18, 
                color: Colors.darkGray, 
        },
        imageStyle: {
            marginLeft: 30,
            alignSelf: 'center',
            height: '60%',
            width:  '15%', 
        },
       textStyle: {
        alignSelf:'center', 
        fontFamily:'Poppins_600SemiBold', 
        fontSize:18, 
        color: Colors.darkGray, 
        paddingLeft: 30,
       },
       
        selectorbox: {
            // top: '75%',
            flexDirection: 'row',
            alignSelf: 'center',
            width: '80%',
            height: '10%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(216, 216, 216, 255)",
            backgroundColor: "#FFFFFF",
            shadowColor: "#707070",
            shadowOffset: {
            width: 0,
            height: 10,
          },
        },
})