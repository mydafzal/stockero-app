import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonSmall";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { GetRequests, Respond } from "../../redux/request/request.action";
import Spacer from "../../components/Spacer";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
const Offers = ({ route, user }) => {
  const data = route.params;
  const navigation = useNavigation();
  const [manufacturer_id, setmanufacturer_id] = useState("");
  const [OfferedPrice, setOfferedPrice] = useState("");
  const [requestData, setRequestData] = useState({});
  const [duration, setDuration] = useState("");
  const requests = useSelector((state) => state.request.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRequests());
  }, []);

  const filterData = () => {
    if (Array.isArray(requests)) {
      const filteredData = requests.filter((item) => {
        return item.id === data.id;
      });
      setRequestData(filteredData);
    }
  };

  useEffect(() => {
    filterData();
  }, [requests]);

  useEffect(() => {
    console.log(requestData);
  }, [requestData]);

  const renderItem = ({ item }) => (
   
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>

          <Text style={styles.header_label}>Make Bid</Text>
        </View>
        <View>
        <Text style={styles.heading}>Order Details</Text>
      </View>
      </View>
      <View style={styles.box}>
      <View style={{paddingLeft:20}}>
      <Text style={styles.text}>{`Product Name: ${item.name}`}</Text>
      <Text style={styles.text}>{`Quantity: ${item.quantity}`}</Text>
      <Text style={styles.text}>{`Asking Price: ${item.asking_price} -/PKR`}</Text>
      <Text style={styles.text}>{`Duration: ${item.asking_days} days`}</Text>
      <Text style={styles.text}>{`Description: ${item.description}`}</Text>
      </View>
      </View>
      <View style={{paddingHorizontal: 30, paddingBottom:20}}>
        <Text style={styles.heading}>Make Offer</Text>
      </View>
      <View style={styles.box}>
    
      <Spacer height={15} />
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"days"}
          onChangeText={(e) => setDuration(e)}
          keyboardType='number-pad'
          placeholder={"Minimum Days"}
          placeholderTextColor="#9A9A9A"
        />
      </View>
      <Spacer height={15} />
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"days"}
          placeholder={"Offered Price"}
          placeholderTextColor="#9A9A9A"
          keyboardType='number-pad'
          onChangeText={(e) => setOfferedPrice(e)}
        />
      </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 30,
        }}
      >
        <ButtonN
          buttonStyle={{ width: "100%", height: "90%", backgroundColor: Colors.primary }}
          title={"Send Offer"}
          textStyle={{ color: "white", fontSize: 16 }}
          onPress={() =>
            dispatch(Respond(item.id, user.user.id, duration, OfferedPrice))
          }
        />
      </View>

    </SafeAreaView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={requestData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.buyer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Respond: (manufacturer_id, offered_price, duration) =>
      dispatch(Respond(manufacturer_id, offered_price, duration)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Offers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_label: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.darkGray,
    marginLeft: "25%",
  },
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
  },
  heading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: Colors.darkGray,
    paddingTop: 20,
    
  },
  text:{
    fontFamily: "Poppins_600SemiBold",
    color: Colors.darkGray,
    fontSize: 13,
    padding: 7,
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    width: "90%",
    height: "30%",
    borderRadius: 10,
    shadowColor: Colors.darkGray,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    alignSelf: "center",
    justifyContent: "center",
  },
 
  
  notiBox: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    paddingTop: 30,
    padding: 15,
    borderRadius: 10,
    borderColor: "#E7E7E9",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "black",
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "black",
    padding: 22,
  },
  notiftext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: Colors.gray,
  },
  time: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: Colors.gray,
  },
  inputField: {
    padding: 10,
    width: "100%",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "rgba(245, 245, 245, 255)",
  },
});
