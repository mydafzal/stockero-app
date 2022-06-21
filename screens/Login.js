import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import TouchableButton from "../components/TouchableButton";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import bg from "../assets/images/bg.png";
import Colors from "../constants/Colors";
import SwitchSelector from "react-native-switch-selector";
import { setAuthUser } from "../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../store/api";
import Loader from "../components/Loader";
import { pathOr } from "ramda";
import { addToast } from "../utils";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authRole, setAuthRole] = useState("buyer");
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();

  const handleSignin = async () => {
    try {
      const { data, error } = await signIn({
        email,
        password,
        authRole,
      });
      if (error) {
        throw new Error(error);
      }
      const { token, user } = data;
      dispatch(setAuthUser({ isLoggedIn: true, userMeta: user, token }));

      const route = `Dashboard ${authRole}`;
      if (authRole === "manufacturer" && !user.isApproved) {
        alert("Your account is not approved yet");
      } else {
        addToast("Login Successful", false);
        navigation.reset({
          index: 0,
          routes: [{ name: route }],
        });
      }
    } catch (err) {
      addToast(
        pathOr("Error Occured While Loggin in", ["data", "message"], err),
        true
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.outerbody}>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text style={styles.loginText}>LOGIN</Text>
              <Spacer height={15} />
              <View style={{ width: 200, display: "flex" }}>
                <SwitchSelector
                  initial={0}
                  onPress={(value) => {
                    setAuthRole(value);
                  }}
                  textColor={Colors.primary} //'#7a44cf'
                  selectedColor={Colors.white}
                  buttonColor={Colors.primary}
                  borderColor={Colors.primary}
                  hasPadding
                  options={[
                    { label: "Buyer", value: "buyer" }, //images.feminino = require('./path_to/assets/img/feminino.png')
                    { label: "Manufacturer", value: "manufacturer" }, //images.masculino = require('./path_to/assets/img/masculino.png')
                  ]}
                  testID="gender-switch-selector"
                  accessibilityLabel="gender-switch-selector"
                />
              </View>
              <Spacer height={30} />
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
                  value={email.toLocaleLowerCase()}
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
                  name={"Paswword"}
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                  secureTextEntry={true}
                />
              </View>

              <Spacer height={10} />
              <Text
                style={{
                  color: "#9A9A9A",
                  fontSize: 12,
                  alignSelf: "flex-end",
                  marginRight: 45,
                  fontFamily: "Poppins_400Regular",
                }}
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                Forgot your Password?
              </Text>
              <Spacer height={30} />
              <TouchableButton
                title={"Login"}
                textStyle={{ color: "white" }}
                onPress={() => handleSignin()}
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
                Don't have and account?
                <Text
                  style={{ color: "#454545", fontFamily: "Poppins_500Medium" }}
                  onPress={() => navigation.navigate("accountselector")}
                >
                  SIGN UP
                </Text>
              </Text>
            </View>
          </View>
          <Loader isLoading={isLoading} />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;

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

  title: {
    width: "100%",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 40,
    color: "#454545",
  },
  inputField: {
    padding: 10,
    width: "100%",
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "rgba(245, 245, 245, 255)",
  },

  img: {
    height: "100%",
    width: "100%",
  },
});
