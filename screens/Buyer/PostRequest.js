import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import SelectBox from "react-native-multi-selectbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import MultiSelect from "react-native-multiple-select";
import { launchImageLibrary } from "react-native-image-picker";
import ButtonN from "../../components/ButtonN";
import { AddRequest } from "../../redux/request/request.action";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
const PostRequest = ({ navigation, user }) => {
  const dispatch = useDispatch();
  const [buyer_id, setbuyer_id] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [asking_days, setAsking_days] = useState("");
  const [asking_price, setAsking_price] = useState("");
  const [photo, setPhoto] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.header_label}>Post Request</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.Ftitle}>Item</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Item"}
              onChangeText={(e) => setName(e)}
              placeholder={"Enter the name of Item"}
            />
          </View>
          <Text style={styles.Ftitle}>Explain your Need</Text>
          <View style={styles.dFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Description"}
              onChangeText={(e) => setDescription(e)}
              placeholder={
                "Please Briefly Explain what kind of product you want"
              }
            />
          </View>
          <Text style={styles.Ftitle}>Enter the stock amount</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Item"}
              onChangeText={(e) => setQuantity(e)}
              keyboardType="number-pad"
              placeholder={"Must be greater than 10"}
            />
          </View>
          <Text style={styles.Ftitle}>In how many days you want it?</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Item"}
              onChangeText={(e) => setAsking_days(e)}
              keyboardType="number-pad"
              placeholder={"Days"}
            />
          </View>
          <Text style={styles.Ftitle}>Your Max Budget</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"budget"}
              onChangeText={(e) => setAsking_price(e)}
              keyboardType="number-pad"
              placeholder={"Enter Amount in PKR"}
            />
          </View>

          <Spacer height={30} />
          <ButtonN
            buttonStyle={{
              backgroundColor: Colors.primaryLite,
            }}
            title={"Request"}
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
           <Spacer height={200} />
        </ScrollView>
      </Animatable.View>
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
export default connect(mapStateToProps, mapDispatchToProps)(PostRequest);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  main: {
    flex: 2,
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  Texts: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#fff",
  },
  Text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "#fff",
  },
  header: {
    flex: 0.5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "flex-end",
  },
  inputField: {
    padding: 15,
    width: "100%",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 255)",
  },
  dFieldCard: {
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
    height: "30%",
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 255)",
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "85%",
    height: "40%",
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  Ftitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: Colors.gray,
    paddingLeft: 35,
    paddingTop: 12,
    paddingBottom: 12,
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "white",
    padding: 22,
  },
  headerr: {
    flex: 1,
    backgroundColor: Colors.primaryAlpha,
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: "flex-end",
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header_label: {
    fontSize: 25,
    fontFamily: "Poppins_600SemiBold",
    color: "white",
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    marginVertical: 5,
    height: 50,
  },
  textInput_label: {
    color: Colors.gray,
    fontFamily: "Poppins_400Regular",
  },
  button: {
    backgroundColor: Colors.primaryAlpha,
    height: 50,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
