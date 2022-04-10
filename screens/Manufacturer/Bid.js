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
import { GetRequests } from "../../redux/request/request.action";
import Spacer from "../../components/Spacer";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
const Offers = () => {
  const navigation = useNavigation();
  const [manufacturer_id, setmanufacturer_id] = useState("");
  const [OfferedPrice, setOfferedPrice] = useState("");
  const [duration, setDuration] = useState("");
  const requests = useSelector((state) => state.request.requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRequests());
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Order # 1",
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.notiBox}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.notiftext}>{item.id}</Text>
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
          onPress={() => {
            console.log(name);
            dispatch(
              AddRequest(
                user.user.id,
                name,
                description,
                quantity,
                asking_days,
                asking_price
              )
            );
          }}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    AddRequest: (
      buyer_id,
      name,
      description,
      quantity,
      asking_days,
      asking_price
    ) =>
      dispatch(
        AddRequest(
          buyer_id,
          name,
          description,
          quantity,
          asking_days,
          asking_price
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Offers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 5,
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
