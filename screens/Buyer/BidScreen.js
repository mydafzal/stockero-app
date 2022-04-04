import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import TouchableButton from '../../components/TouchableButton';
import Spacer from "../../components/Spacer";
const BidScreen = ({navigation, route}) => {
  const plant = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      
      <View style={style.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <ScrollView style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            // marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: Colors.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${plant.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {plant.about}
          </Text>
          <View>
          <Text style={style.Ftitle}>Minimum Offer:</Text>
      <View style={style.inputFieldCard}>
        <TextInput
          style={style.inputField}
          name={"Name"}
          editable = {false}
          value={plant.price}
        />
      </View>
      </View>
      <View>
          <Text style={style.Ftitle}>Your Offer:</Text>
      <View style={style.inputFieldCard}>
        <TextInput
          style={style.inputField}
          name={"Name"}
          placeholder={"Must be greater than Actual Price"}
        />
      </View>
      </View>
          {/* <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: Colors.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View> */}
        </View>
        <Spacer height={20} />
        <TouchableButton buttonStyle= {{backgroundColor: Colors.green, borderColor: Colors.green, width: '100%'}}title={'Send Bid Offer'} textStyle={{ fontSize: 15, color: Colors.white, }} onPress={() => navigation.navigate('accountselector')} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.4,
    marginTop: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: Colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 20,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
    borderColor: Colors.darkGray,
    borderWidth: 1,
    backgroundColor: "#f4f4f4",
  },
  inputField: {
    padding: 15,
    width: "100%",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  Ftitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: Colors.black,
    paddingTop: 12,
    paddingBottom: 12,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: Colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: Colors.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default BidScreen;