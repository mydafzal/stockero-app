import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonN from "../../components/ButtonSmall";
const OrderDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>

          <Text style={styles.header_label}>Order Status</Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>Your Order Details</Text>
      </View>
      <View style={styles.box}>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.text}>{`Product Name: ${item.name}`}</Text>
          <Text style={styles.text}>{`Quantity: ${item.quantity}`}</Text>
          <Text style={styles.textP}>{`Price: ${item.offer_price}`}</Text>
          <Text style={styles.textd}>{`Duration: ${item.duration}`}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>Your Order Status</Text>
      </View>
      <View style={styles.boxStatus}>
        <Text style={styles.textStatus}>{`Status: ${item.status}`}</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header_label: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.darkGray,
    marginLeft: "22%",
  },
  header: {
    paddingTop: 65,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
  },
  heading: {
    paddingHorizontal: 30,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: Colors.darkGray,
    paddingTop: 40,
    paddingBottom: 15,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.black,
    fontSize: 13,
    padding: 7,
  },
  textP: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.green,
    fontSize: 13,
    padding: 7,
  },
  textd: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.primary,
    fontSize: 13,
    padding: 7,
  },
  textStatus: {
    fontFamily: "Poppins_500Medium",
    color: Colors.green2,
    fontSize: 18,
    padding: 20,
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
    width: "85%",
    height: "20%",
    borderRadius: 10,
    shadowColor: Colors.darkGray,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    alignSelf: "center",
    justifyContent: "center",
  },
  boxStatus: {
    backgroundColor: "white",
    width: "85%",
    height: "10%",
    borderRadius: 10,
    shadowColor: Colors.darkGray,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    alignSelf: "center",
    justifyContent: "center",
  },
  line: {
    borderBottomColor: "#E7E7E9",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
});
