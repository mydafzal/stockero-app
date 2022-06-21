import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import TouchableButton from "../components/TouchableButton";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import bg from "../assets/images/bg.png";
import { useDispatch } from "react-redux";
import { useManufacturerSignUpMutation } from "../store/api";
import { addToast } from "../utils";
import { pathOr } from "ramda";
import { setAuthUser } from "../store/slice/authSlice";
import Loader from "../components/Loader";

const Signup = ({ navigation }) => {
  const [fullName, setfullName] = React.useState("");
  const [factoryName, setfactoryName] = React.useState("");
  const [cnic, setcnic] = React.useState("");
  const [ntn, setntn] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [manufacturerSignUp, { isLoading }] = useManufacturerSignUpMutation();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (
      !fullName.length > 0 ||
      !factoryName.length > 0 ||
      !cnic.length > 0 ||
      !ntn.length > 0 ||
      !email.length > 0 ||
      !password.length > 0
    ) {
      addToast("Please fill all the fields", true);
      return;
    }
    try {
      const { data, error } = await manufacturerSignUp({
        name: fullName,
        email: email,
        password: password,
        address: factoryName,
        ntn: ntn,
        CNIC: cnic,
      });
      const { token, user } = data;
      dispatch(setAuthUser({ isLoggedIn: true, userMeta: user, token }));
      addToast("Signup Successful", false);
      if (user?.isApproved) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard manufacturer" }],
        });
      } else {
        alert("Your Status is not approved by the admin yet");
      }
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      addToast(
        pathOr("Error Occured While Loggin in", ["data", "message"], error),
        true
      );
    } finally {
      await clearForm();
    }
  };
  const clearForm = async () => {
    setfullName("");
    setfactoryName("");
    setcnic("");
    setntn("");
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground source={bg} style={styles.container}>
        {/* <ScrollView> */}
        <View style={styles.outerbody}>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text style={styles.loginText}>SIGN UP</Text>
              <Spacer height={15} />
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <Ionicons
                  name="person"
                  size={17}
                  color="#9A9A9A"
                  style={{ alignSelf: "center", paddingLeft: 15 }}
                />
                <TextInput
                  style={styles.inputField}
                  name={"FullName"}
                  placeholder="Enter your full name"
                  placeholderTextColor="#9A9A9A"
                  value={fullName}
                  onChangeText={(e) => setfullName(e)}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <Ionicons
                  name="mail"
                  size={17}
                  color="#9A9A9A"
                  style={{ alignSelf: "center", paddingLeft: 15 }}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your Email"
                  placeholderTextColor="#9A9A9A"
                  name={"email"}
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <Ionicons
                  name="lock-closed"
                  size={17}
                  color="#9A9A9A"
                  style={{ alignSelf: "center", paddingLeft: 15 }}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="******"
                  placeholderTextColor="#9A9A9A"
                  name={"Password"}
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                  secureTextEntry={true}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <Ionicons
                  name="business"
                  size={17}
                  color="#9A9A9A"
                  style={{ alignSelf: "center", paddingLeft: 15 }}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your Factory name"
                  placeholderTextColor="#9A9A9A"
                  name={"FactoryName"}
                  value={factoryName}
                  onChangeText={(e) => setfactoryName(e)}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Provide your CNIC"
                  placeholderTextColor="#9A9A9A"
                  keyboardType="number-pad"
                  onChangeText={(e) => setcnic(e)}
                  value={cnic}
                  maxLength={13}
                  name={"CNIC"}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Valid NTN Number"
                  placeholderTextColor="#9A9A9A"
                  keyboardType="number-pad"
                  value={ntn}
                  onChangeText={(e) => setntn(e)}
                  maxLength={7}
                  name={"NTN"}
                />
              </View>
              <Spacer height={30} />
              <TouchableButton
                title={"Confirm"}
                textStyle={{ color: "white" }}
                onPress={handleSignUp}
              />
              <Spacer height={10} />
              <Text
                style={{
                  color: "#9A9A9A",
                  fontSize: 12,
                  textAlign: "center",
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Already have an account?
                <Text
                  style={{
                    color: "#454545",
                    fontFamily: "Poppins_500Medium",
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  SIGN IN
                </Text>
              </Text>
              {/* </View> */}
            </View>
          </View>
          <Loader isLoading={isLoading} />
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    resizeMode: "contain",
    margin: 0,
  },
  outerbody: {
    display: "flex",
    width: "100%",
    height: "100%",
    // padding: "3%",
  },
  body: {
    padding: "5%",
    flex: 8,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    //flex: 0.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    // top: '20%',
  },
  details: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loginText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 40,
    color: "#454545",
  },

  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    // paddingStart: 18.5,
    //paddingTop: 23,
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "rgba(245, 245, 245, 255)",
  },

  inputField: {
    width: "100%",
    padding: 10,
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "black",
  },
  inputFieldName: {
    width: "40%",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "rgba(245, 245, 245, 255)",
  },
});
