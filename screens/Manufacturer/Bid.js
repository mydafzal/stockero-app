import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  TextInput
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonSmall";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../../components/Spacer";
const Offers = () => {
    const navigation = useNavigation();
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Order # 1",
    }
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
                  placeholder={"Minimum Days"}
                />
              </View>
              <Spacer height={15} />
              <View style={styles.inputFieldCard}>
                <TextInput
                  style={styles.inputField}
                  name={"days"}
                  placeholder={"Offered Price"}
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

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 5,
  },
  notiBox: {
      marginTop:20,
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
