import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import ButtonSmall from '../../components/ButtonSmall';
import Spacer from '../../components/Spacer';

const AllProducts = () => {
    const DATA = [
        {
          id: '1',
          title: 'Product 1',
        },
        {
          id: '2',
          title: 'Product 2',
        },
        {
          id: '3',
          title: 'Product 3',
        },
        {
          id: '4',
          title: 'Product 4',
        },
        {
          id: '5',
          title: 'Product 5',
        },
        {
          id: '6',
          title: 'Product 6',
        },
      ]
      const renderItem = ({item}) => (
        <View style={styles.Box}>
          <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.notiftext}>{item.id}</Text>
        </View>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
        <ButtonSmall buttonStyle= {{marginTop: 15}}title="Edit" />
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

export default AllProducts

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
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
      },
      productNameCard:
        {
            alignSelf: 'center',
            width: '35%',
            height: 60,
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