import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

const Orders = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Order # 1',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Order # 2',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Order # 3',
        },
      ]
      const renderItem = ({item}) => (
        <View style={styles.notiBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.notiftext}>{item.id}</Text>
      </View>
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
        marginTop: StatusBar.currentHeight || 5,
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
        fontSize: 20,
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
      
    });