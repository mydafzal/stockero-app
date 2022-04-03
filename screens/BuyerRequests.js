import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import ButtonSmall from '../components/ButtonSmall';
import Spacer from '../components/Spacer';

const BuyerRequests = () => {
    const DATA = [
        {
          id: '1',
          title: 'T-Shirt',
          quantity: 'Quantity: 10 Pieces',
          price: 'Price: $10',
          duration: '10 Days',
        },
        {
          id: '2',
          title: 'Product 2',
          quantity: '10',
          price: '$10',
          duration: '10 Days',
        },
        {
          id: '3',
          title: 'Product 3',
          quantity: '10',
          price: '$10',
          duration: '10 Days',
        },
        {
          id: '4',
          title: 'Product 4',
          quantity: '10',
          price: '$10',
          duration: '10 Days',
        },
        {
          id: '5',
          title: 'Product 5',
          quantity: '10',
          price: '$10',
          duration: '10 Days',
        },
        {
          id: '6',
          title: 'Product 6',
          quantity: '10',
          price: '$10',
          duration: '10 Days',
        },
      ]
      const renderItem = ({item}) => (
        <View style={styles.Box}>
          <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.quantity}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Text style={styles.text}>{item.duration}</Text>
        </View>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
        <ButtonSmall buttonStyle= {{backgroundColor: Colors.green, marginTop: 15}} textStyle={{color:'white'}} title="Bid" />
        </View>
      </View>
      )
    return (
        <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

export default BuyerRequests

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20,
      },
      Box: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 10,
        borderColor: '#E7E7E9',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
      },
      productNameCard:
        {
            alignSelf: 'center',
            width: '35%',
            height: 100,
            justifyContent: 'center',
        },
      title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        color: "black",
      },
      Headtitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: "black",
        padding: 22,
      },
      text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        color: Colors.gray,
      },
      time: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 10,
        color: Colors.gray,
      },
      
    });