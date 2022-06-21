import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import TouchableButton from "../../components/TouchableButton";
import Spacer from "../../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import bg from "../../assets/images/bg.png";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../store/slice/authSlice";
import { useBuyerSignUpMutation } from "../../store/api";
import Loader from "../../components/Loader";
import { addToast } from "../../utils";
import { pathOr } from "ramda";

const Signup = ({ navigation }) => {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buyerSignUp, { isLoading }] = useBuyerSignUpMutation();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const { data, error } = await buyerSignUp({
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });
      if (error) {
        console.log(error);
        throw new Error(error);
      }
      const { token, user } = data;
      dispatch(setAuthUser({ isLoggedIn: true, userMeta: user, token }));
      addToast("Signup Successful", false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard buyer" }],
      });
    } catch (error) {
      addToast(
        pathOr("Error Occured While Loggin in", ["data", "message"], error),
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
                  placeholder="First Name"
                  placeholderTextColor="#9A9A9A"
                  name={"FirstName"}
                  value={firstName}
                  onChangeText={(e) => setfirstName(e)}
                />
              </View>
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
                  placeholder="Last Name"
                  placeholderTextColor="#9A9A9A"
                  name={"LastName"}
                  value={lastName}
                  onChangeText={(e) => setlastName(e)}
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
                  name={"Password"}
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                  secureTextEntry={true}
                />
              </View>
              <Spacer height={30} />

              <TouchableButton
                title={"Confirm"}
                textStyle={{ color: "white" }}
                onPress={() => handleSignup()}
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
                  style={{ color: "#454545", fontFamily: "Poppins_500Medium" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  SIGN IN
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
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
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
