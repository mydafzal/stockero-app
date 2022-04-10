import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import ButtonSmall from '../../components/ButtonSmall';
import { GetRequests } from "../../redux/request/request.action";
import Spacer from "../../components/Spacer";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react'
const BuyerRequests = () => {
  const navigation = useNavigation();
  const requests = useSelector((state) => state.request.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRequests());
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);
    const DATA = requests
      const renderItem = ({item}) => (
        <View style={styles.Box}>
          <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.quantity}</Text>
        <Text style={styles.text}>{item.asking_price}</Text>
        <Text style={styles.text}>{item.asking_days}</Text>
        <Text style={styles.text}>{item.description}</Text>
        </View>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
        <ButtonSmall buttonStyle= {{backgroundColor: Colors.green, marginTop: 15}} textStyle={{color:'white'}} title="Bid" onPress={() => navigation.navigate("Bid Manufacturer")} />
        </View>
      </View>
      )
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.Headtitle}>Buyer Requests</Text>
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