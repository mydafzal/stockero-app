import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  TextInput,
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
    <View style={styles.notiBox}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.notiftext}>{item.quantity}</Text>
      <Text style={styles.notiftext}>{item.description}</Text>
      <Spacer height={15} />
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"days"}
          onChangeText={(e) => setDuration(e)}
          placeholder={"Minimum Days"}
        />
      </View>
      <Spacer height={15} />
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"days"}
          placeholder={"Offered Price"}
          onChangeText={(e) => setOfferedPrice(e)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 30,
        }}
      >
        <ButtonN
          buttonStyle={{ width: "100%", height: "90%" }}
          title={"Send Offer"}
          textStyle={{ color: Colors.primary }}
          onPress={() =>
            dispatch(Respond(item.id, user.user.id, OfferedPrice, duration))
          }
        />
      </View>
    </View>
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
    // flexDirection: 'row',
    padding: 10,
    width: "100%",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    // paddingStart: 18.5,
    //paddingTop: 23,
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "rgba(245, 245, 245, 255)",
  },
});
