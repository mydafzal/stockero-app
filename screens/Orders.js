import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import bg from '../assets/images/m-bg.png'
import Spacer from '../components/Spacer';
import MyProducts from '../assets/icons/myproducts.png'
import Products from '../assets/icons/myproducts.png'
import Leftovers from '../assets/icons/leftovers.png'
import ActiveOrders from '../assets/icons/orders.png'
import PaymentMethod from '../assets/icons/payment.png'
import Address from '../assets/icons/addressicon.png'

const Orders = ({ navigation }) => {
    return (
        <ImageBackground
        source={bg}
        style={styles.container}
    >
        <View style={styles.header}>
                <Text style={styles.Text}>Hi, Momal</Text>
            </View>
            <Spacer height={30} />
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={Products}
                        style={styles.iconStyle2}
                    >
                    </Image>
                    <Text>Add Products</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={MyProducts}
                        style={styles.iconStyle2}
                    >
                    </Image>
                    <Text>My Products</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={Leftovers}
                        style={styles.iconStyle2}
                    >
                    </Image>
                    <Text>List Leftovers</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={ActiveOrders}
                        style={styles.iconStyle}
                    >
                    </Image>
                    <Text>Active Orders</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={PaymentMethod}
                        style={styles.iconStyle}
                    >
                    </Image>
                    <Text>Payment Method</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                        source={Address}
                        style={styles.iconStyle}
                    >
                    </Image>
                    <Text>Physical Address</Text>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
}

export default Orders;

const styles = StyleSheet.create({

    container: {
        paddingTop: 5,
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    header: {
        flex: 0.5,
        paddingLeft: 10,
    },
    Text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25,
        color: '#fff'
    },
    box: {
        width: '40%',
        height: '20%',
        padding: 5,
        
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',

    },
    iconStyle2: {
        width: "30%", 
        height: '30%'
    },
    iconStyle: {
        width: "30%", 
        height: '30%'
    }
})