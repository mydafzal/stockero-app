import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import headerart from '../assets/images/headerart.png';
import Colors from '../constants/Colors';

const Home=({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Text}>Hi, Momal</Text>
            </View>
            
            <View style={styles.main}>
            <Text style={{alignItems:'flex-start', fontFamily:'Poppins_600SemiBold', fontSize:18, color: Colors.darkGray, paddingLeft: 10, paddingBottom:10}}>Active Orders</Text>
                <View style={styles.orderBox}>

                </View>
                <Text style={{alignItems:'flex-start', fontFamily:'Poppins_600SemiBold', fontSize:18, color: Colors.darkGray, paddingLeft: 10, paddingTop:15, paddingBottom:10}}>To Do's</Text>
                <View style={styles.todoBox}>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.primary,
    },
        header: {
            flex:0.5,
            justifyContent:'center',
            alignItems: 'flex-start',
            paddingLeft: 20,
        },
        main: {
            flex:2,
            backgroundColor:'#FAFAFC',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            paddingVertical: 50,
            paddingHorizontal: 20
        },
        Text: {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 25,
            color: '#fff'
        },

        orderBox: {
            flexDirection: 'row',
            alignSelf: 'center',
            width: '95%',
            height: '40%',
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
        todoBox: {
            flexDirection: 'row',
            alignSelf: 'center',
            width: '95%',
            height: '35%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(216, 216, 216, 255)",
            backgroundColor: "#FFFFFF",
            shadowColor: "#707070",
            shadowOffset: {
            width: 0,
            height: 10,
          },
        }
})