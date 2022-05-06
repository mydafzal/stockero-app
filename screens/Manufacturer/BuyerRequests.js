import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ButtonSmall from "../../components/ButtonSmall";
import { GetRequests } from "../../redux/request/request.action";
import Spacer from "../../components/Spacer";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
const BuyerRequests = () => {
  const navigation = useNavigation();
  const requests = useSelector((state) => state.request.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRequests());
  }, []);
  useEffect(() => {
    if (requests.isLoading) {
      alert("loading");
    }
  }, [requests.isLoading]);

  useEffect(() => {
    // console.log(requests);
  }, [requests]);
  const DATA = requests;
  const renderItem = ({ item }) => (
    <View style={styles.Box}>
      <View style={styles.productNameCard}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Product Name: </Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Pieces: </Text>
          <Text style={styles.text}>{item.quantity}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Days Limit: </Text>
          <Text style={styles.text}>{item.asking_days}</Text>
          <Text style={styles.text}> days</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Offered Price: </Text>
          <Text style={styles.text}>{item.asking_price}</Text>
          <Text style={styles.text}>-/PKR</Text>
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <ButtonSmall
          buttonStyle={{ marginTop: 15, marginRight: 20, backgroundColor: Colors.greenLite }}
          textStyle={{ color: Colors.green2}}
          title="Bid"
          onPress={() => {
            const body = { id: item.id };
            navigation.navigate("Bid Manufacturer", body);
          }}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Headtitle}>Buyer Requests</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default BuyerRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  Box: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#E7E7E9",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  productNameCard: {
    alignSelf: "center",
    width: "35%",
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "black",
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "black",
    padding: 22,
  },
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: Colors.gray,
  },
  textheading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: Colors.black,
  },
  time: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: Colors.gray,
  },
});
