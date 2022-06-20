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
import Spacer from "../../components/Spacer";
const Recipt = ({ route, navigation }) => {
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

          <Text style={styles.header_label}>Recipt</Text>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:30, paddingTop: 20}}>
        <View>
      <Text style={styles.text}>{`Order # ${item.id}`}</Text>
      <Text style={styles.textDate}>{`${new Date(item?.createdAt).toDateString()}`}</Text>
      </View>
      <Text style={styles.textStatus}>{`${item.status}`}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Order Details</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.textBox}>{`Product Name: ${item.name}`}</Text>
      <Text style={styles.textBox}>{`Quantity: ${item.quantity} pieces`}</Text>
      <Text style={styles.textBox}>{`Price: ${item.offer_price} -/PKR`}</Text>
      <Text style={styles.textBox}>{`Status: ${item.status}`}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Order Description</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.textBox}>{`${item.details}`}</Text>
      </View>
      <Spacer height={30} />
      <View style={{alignItems: 'center'}}>
      <ButtonN
          buttonStyle={{ width: "100%", height: "100%", backgroundColor: Colors.primary, }}
          title={"Pay Now"}
          textStyle={{ color: "white", fontSize: 16 }}
          onPress={() => navigation.navigate("Recipt", { item })}
        />
        </View>
    </SafeAreaProvider>
  );
};

export default Recipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header_label: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.darkGray,
    marginLeft: "30%",
  },
  header: {
    paddingTop: 65,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
  },
  heading: {
    paddingHorizontal: 30,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: Colors.darkGray,
    paddingTop: 40,
    paddingBottom: 15,
  },
  textBox:{
    fontFamily: "Poppins_500Medium",
    color: Colors.darkGray,
    fontSize: 13,
    padding: 7,
  },
  text:{
    fontFamily: "Poppins_500Medium",
    color: Colors.black,
    fontSize: 16,
    padding: 7,
  },
  textDate:{
    fontFamily: "Poppins_400Regular",
    color: Colors.darkGray,
    fontSize: 13,
    padding: 7,
  },
  textStatus:{
    fontFamily: "Poppins_500Medium",
    color: Colors.primary,
    fontSize: 16,
    padding: 7,
  },
  textd:{
    fontFamily: "Poppins_600SemiBold",
    color: Colors.primary,
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
    width: "85%",
    height: "20%",
    borderRadius: 10,
    borderColor: Colors.borderColor,
    borderWidth: 3,
    alignSelf: "center",
    justifyContent: "center",
    padding:20,
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
  line:{
      borderBottomColor: "#E7E7E9",
      borderBottomWidth: 1,
      width: "90%",
      alignSelf: "center",
  }
});
