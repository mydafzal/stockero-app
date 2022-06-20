import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { GetProducts, deleteProduct, GetOrders } from "../../redux/product/product.action";
import { useEffect } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Orders = ({ navigation }) => {
  const orders = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrders());
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);
  const DATA = orders;

      const renderItem = ({item}) => (
        <TouchableOpacity style={styles.notiBox} onPress={()=>navigation.navigate("OrderDetail",{item:item})}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Name: </Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Quantity: </Text>
          <Text style={styles.text}>{item.quantity}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Status: </Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </TouchableOpacity>
      )
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Headtitle}>Orders</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

export default Orders

const styles = StyleSheet.create({

    container: {
        flex: 1,
      },
      notiBox: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        borderColor: '#E7E7E9',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 16,
      },
      title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: "black",
      },
      Headtitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25,
        color: "black",
        padding: 22,
      },
      notiftext: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        color: Colors.gray,
      },
      time: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 10,
        color: Colors.gray,
      },
      textheading: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 13,
        color: Colors.black,
      },
      
    });