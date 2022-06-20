import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useEffect, useState, useRef } from "react";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import SelectBox from "react-native-multi-selectbox";
import ButtonN from "../../components/ButtonN";
import Spacer from "../../components/Spacer";
import { useDispatch, useSelector, connect } from "react-redux";
import { updateOrder } from "../../redux/order/order.action";
const status = [
  {
    item: "pending",
    id: "PN",
  },

  {
    item: "InProgress",
    id: "IP",
  },

  {
    item: "delivered",
    id: "DL",
  },
];
const OrderDetails = ({ route, navigation }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { item } = route.params;
  const { isSuccess, error, errorMessage, isLoading, order } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();

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
        <Text style={styles.heading}>Order Details</Text>
      </View>
      <View style={styles.box}>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.text}>{`Product Name: ${item.name}`}</Text>
          <Text style={styles.text}>{`Quantity: ${item.quantity}`}</Text>
          <Text style={styles.text}>{`Price: ${item.offer_price}`}</Text>
          <Text style={styles.text}>{`Duration: ${item.duration}`}</Text>
        </View>
      </View>
      {/* <View>
        <Text style={styles.heading}>Current Status</Text>
      </View>
      <View style={styles.boxStatus}>
      <View style={{paddingLeft:20}}>
      <Text style={styles.text}>{`Status: ${item.status}`}</Text>
      </View>
      </View> */}
      <View>
        <Text style={styles.heading}>Update Status</Text>
      </View>
      <View style={{ margin: 30 }}>
        <SelectBox
          label="Change Order Status"
          options={status}
          value={selectedTypes}
          onChange={onChange()}
          backgroundColor={Colors.white}
          hideInputFilter={false}
          arrowIconColor={Colors.primary}
          searchIconColor={Colors.primary}
        />
      </View>
      <Spacer height={50} />
      <ButtonN
        buttonStyle={{ backgroundColor: Colors.primaryLite }}
        title={"Update Status"}
        textStyle={{ color: Colors.primary }}
        onPress={() => {
          if (selectedTypes?.item) {
            dispatch(updateOrder(item.id, selectedTypes?.item));
            navigation.goBack();
          } else{
            alert("Please select status")
          }
        }}
      />
    </SafeAreaProvider>
  );
  function onChange() {
    return (val) => setSelectedTypes(val);
  }
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
    fontSize: 20,
    color: Colors.darkGray,
    paddingTop: 40,
    paddingBottom: 15,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.darkGray,
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
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignSelf: "center",
    justifyContent: "center",
  },
  boxStatus: {
    backgroundColor: "white",
    width: "85%",
    height: "5%",
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
