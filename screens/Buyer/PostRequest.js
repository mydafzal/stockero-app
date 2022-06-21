import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonN";
import Spacer from "../../components/Spacer";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { usePostRequestMutation } from "../../store/api";
import { authSliceSelector } from "../../store/slice/authSlice";
import { addToast } from "../../utils";
import { pathOr } from "ramda";
import Loader from "../../components/Loader";

const PostRequest = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [asking_days, setAsking_days] = useState("");
  const [asking_price, setAsking_price] = useState("");
  const [postRequest, { isLoading }] = usePostRequestMutation();
  const { userMeta } = useSelector(authSliceSelector);

  const handlePostRequest = async () => {
    if (
      !name.length > 0 ||
      !description.length > 0 ||
      !quantity.length > 0 ||
      !asking_days.length > 0 ||
      !asking_price.length > 0
    ) {
      addToast("Please fill all the fields", true);
      return;
    }
    try {
      const { data, error } = await postRequest({
        buyer_id: userMeta?.id,
        name: name,
        description: description,
        quantity: quantity,
        asking_days: asking_days,
        asking_price: asking_price,
      });
      if (error) {
        throw new Error(error);
      }
      console.log(data);
      addToast(data?.message, false);
    } catch (error) {
      addToast(
        pathOr(
          "Error Occured While Posting Request",
          ["data", "message"],
          error
        ),
        true
      );
    } finally {
      await resetForm();
      navigation.goBack();
    }
  };
  const resetForm = async () => {
    setName("");
    setDescription("");
    setQuantity("");
    setAsking_days("");
    setAsking_price("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.header_label}>Post Request</Text>
      </View>
      {/* <KeyboardAvoidingView style={{ flex: 3 }} behavior="padding" enabled> */}
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.Ftitle}>Item</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Item"}
              value={name}
              onChangeText={(e) => setName(e)}
              placeholder={"Enter the name of Item"}
            />
          </View>
          <Text style={styles.Ftitle}>Explain your Need</Text>
          <View style={styles.dFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Description"}
              value={description}
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
              value={quantity}
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
              value={asking_days}
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
              value={asking_price}
              onChangeText={(e) => setAsking_price(e)}
              keyboardType="number-pad"
              placeholder={"Enter Amount in PKR"}
            />
          </View>

          <Spacer height={30} />
          <View style={{ marginBottom: 70 }}>
            <ButtonN
              buttonStyle={{
                backgroundColor: Colors.primaryLite,
              }}
              title={"Request"}
              textStyle={{ color: Colors.primary }}
              onPress={handlePostRequest}
            />
          </View>
          <Spacer height={200} />
        </ScrollView>
      </Animatable.View>
      {/* </KeyboardAvoidingView> */}
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default PostRequest;

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
