import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Loader from "../../components/Loader";

import React, { useState } from "react";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonSmall";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../../components/Spacer";
import { connect, useDispatch, useSelector } from "react-redux";
import { useGetRequestQuery } from "../../store/api";
import { addToast } from "../../utils";
import { useRespondToRequestMutation } from "../../store/api";
import { authSliceSelector } from "../../store/slice/authSlice";
import { pathOr } from "ramda";

const Offers = ({ route, navigation }) => {
  const { item } = route.params;
  const [manufacturer_id, setmanufacturer_id] = useState("");
  const [OfferedPrice, setOfferedPrice] = useState("");
  const [requestData, setRequestData] = useState({});
  const [duration, setDuration] = useState("");
  const [respondToRequest, { isLoading }] = useRespondToRequestMutation();
  const { userMeta } = useSelector(authSliceSelector);

  const handleRespond = async () => {
    if (!OfferedPrice.length > 0 || !duration.length > 0) {
      addToast("Please fill all the fields", true);
      return;
    }
    try {
      const { data, error } = await respondToRequest({
        id: item.id,
        manufacturer_id: userMeta?.id,
        offered_price: +OfferedPrice,
        duration: +duration,
      });
      if (error) {
        console.log(error);
        throw new Error(error);
      }
      navigation.goBack();
    } catch (error) {
      addToast(
        pathOr("Something went wrong", ["error", "message"], error),
        true
      );
    }
  };

  return (
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
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.text}>{`Product Name: ${item.name}`}</Text>
          <Text style={styles.text}>{`Quantity: ${item.quantity}`}</Text>
          <Text
            style={styles.text}
          >{`Asking Price: ${item.asking_price} -/PKR`}</Text>
          <Text
            style={styles.text}
          >{`Duration: ${item.asking_days} days`}</Text>
          <Text style={styles.text}>{`Description: ${item.description}`}</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.heading}>Make Offer</Text>
      </View>
      <View style={styles.box}>
        <Spacer height={15} />
        <View style={styles.inputFieldCard}>
          <TextInput
            style={styles.inputField}
            name={"days"}
            onChangeText={(e) => setDuration(e)}
            keyboardType="number-pad"
            value={duration}
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
            value={OfferedPrice}
            keyboardType="number-pad"
            onChangeText={(e) => setOfferedPrice(e)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <ButtonN
          buttonStyle={{
            width: "100%",
            height: "90%",
            backgroundColor: Colors.primary,
          }}
          title={"Send Offer"}
          textStyle={{ color: "white", fontSize: 16 }}
          onPress={handleRespond}
        />
      </View>
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default Offers;

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
  text: {
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
