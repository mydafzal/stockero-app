import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

const Notifications = () => {
  
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Factory Name',
          noti: 'Offered you a new Price',
          time: '10:00',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Maida',
          noti: 'You won a bid',
          time: '10:00',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Any Name',
          noti: 'Posted Request',
          time: '10:00',
        },
      ]
      const renderItem = ({item}) => (
        <View style={styles.notiBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.notiftext}>{item.noti}</Text>
      </View>
      )
    return (
      
        <SafeAreaView style={styles.container}>
          
            <Text style={styles.Headtitle}>Notifications</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 5,
        // backgroundColor: rgb(250, 230, 209, 0.1),
      },
      Headtitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: "black",
        padding: 22,
      },
      notiBox: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 16,
      },
      title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: "black",
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