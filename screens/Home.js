import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image } from 'react-native';
import headerart from '../assets/images/headerart.png';
import Header from '../screens/Header';
import Spacer from '../components/Spacer';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import MyProducts from '../assets/icons/myproducts.png'
import Products from '../assets/icons/myproducts.png'
import Leftovers from '../assets/icons/leftovers.png'
import ActiveOrders from '../assets/icons/orders.png'
import PaymentMethod from '../assets/icons/payment.png'
import Address from '../assets/icons/addressicon.png'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Text}>Welcome Back!</Text>
                <Spacer height={5} />
                <Text style={styles.Texts}>See what's happening</Text>
            </View>
            <View style={styles.main}>
            <Spacer height={50} />
            <View style={styles.innerContainer}>
            <View style={styles.box}>
                <View style={styles.inner} onPress={() => navigation.navigate('Add Products')}>
                    <Image
                        source={Products}
                        style={{ width: "40%", height: '45%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont} onPress={() => navigation.navigate('Add Products')}>Add Products</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={MyProducts}
                        style={{ width: "40%", height: '45%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont}>My Products</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={Leftovers}
                        style={{ width: "30%", height: '35%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont}>List Leftovers</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={ActiveOrders}
                        style={{ width: "30%", height: '35%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont}>Active Orders</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={PaymentMethod}
                        style={{ width: "40%", height: '40%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont}>Payment Method</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={Address}
                        style={{ width: "40%", height: '40%' }}
                    >
                    </Image>
                    <Text style={styles.boxFont}>Physical Address</Text>
                </View>
            </View>
        </View>
                {/* <Text style={{ alignItems: 'flex-start', fontFamily: 'Poppins_600SemiBold', fontSize: 18, color: Colors.darkGray, paddingLeft: 10, paddingBottom: 10 }}>Active Orders</Text>
                <View style={styles.orderBox}>

                </View>
                <Text style={{ alignItems: 'flex-start', fontFamily: 'Poppins_600SemiBold', fontSize: 18, color: Colors.darkGray, paddingLeft: 10, paddingTop: 15, paddingBottom: 10 }}>To Do's</Text>
                <View style={styles.todoBox}>

                </View> */}
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
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    main: {
        flex: 2,
        backgroundColor: '#F2F2F2',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    Text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25,
        color: '#fff'
    },
    Texts: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
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
    },
    innerContainer: {
        width: '100%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    box: {
        width: '40%',
        height: '30%',
        padding: 10,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',

    },
    boxFont: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        paddingTop: 15,
    }
})