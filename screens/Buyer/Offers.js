import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonSmall";
import axios from "axios";

import { connect, useDispatch, useSelector } from "react-redux";
import { Approve, GetOffers } from "../../redux/request/request.action";

const Offers = ({ user }) => {
  const userID = user.user.id;
  const offers = useSelector((state) => state.request.offers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (offers.isLoading) {
      alert("loading");
    }
  }, [offers.isLoading]);
  useEffect(() => {
    if (userID) {
      dispatch(GetOffers(userID));
    }
  }, [userID]);

  const approveOffer = (
    manufacturer_id,
    offered_price,
    offered_duration,
    name,
    description,
    quantity
  ) => {
    const body = {
      buyer_id: userID,
      manufacturer_id,
      offered_price,
      offered_duration,
      name,
      details: description,
      quantity,
    };

    dispatch(Approve(body));
  };

  useEffect(() => {
    console.log(offers);
  }, [offers]);

  
  const DATA = offers;
  const renderItem = ({ item }) => (
    <View style={styles.notiBox}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.notiftext}>{item.id}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 30,
        }}
      >
        <ButtonN
          buttonStyle={{ width: "50%", height: "70%" }}
          title={"Accept"}
          textStyle={{ color: Colors.primary }}
          onPress={() => {
            approveOffer(
              item.manufacturer_id,
              item.offered_price,
              item.offered_duration,
              item.name,
              item.description,
              item.quantity
            );
          }}
        />
        <ButtonN
          buttonStyle={{ width: "50%", height: "70%" }}
          title={"Reject"}
          textStyle={{ color: Colors.red }}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Headtitle}>Offers</Text>
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
    Respond: () => dispatch(Respond()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Offers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notiBox: {
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
});
