import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../components/TouchableButton";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import bg from "../assets/images/bg.png";
import { connect } from "react-redux";
import { register } from "../redux/manufacturer/manufacturer.action";
import { Alert } from "react-native";
import { signOut } from "../redux/manufacturer/manufacturer.action";
import axios from "axios";

const Signup = ({ register, user}) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState();
  const [fullName, setfullName] = React.useState("");
  const [factoryName, setfactoryName] = React.useState("");
  const [cnic, setcnic] = React.useState("");
  const [ntn, setntn] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  useEffect(() => {
    // if (user.isLoading) {
    //   alert(email);
    // }
    //console.log(user.user);
  }, []);

  useEffect(() => {
    if (user.error) {
      alert(user.errorMessage);
    }
  }, [user.error, user.errorMessage]);

  useEffect(() => {
   
    if (Object.keys(user.user).length>0) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard manufacturer" }],
      });
      // console.log(user.user.isApproved);
      // if(!user.user.isApproved){
      //   alert("Your account is not approved yet. Please wait for approval.")
      //   signOut();        
      // } else{
      //   navigation.reset({
      //     index: 0,
      //     routes: [{ name: "Dashboard manufacturer" }],
      //   });
      // }
    }
  }, [user.user]);

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
                  name={"FullName"}
                  placeholder={"Enter your full name"}
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
                  name={"email"}
                  value={email.toLocaleLowerCase()}
                  placeholder={"Enter your email"}
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
                  name={"Password"}
                  value={password}
                  placeholder={"**********"}
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
                  name={"FactoryName"}
                  value={factoryName}
                  placeholder={"Enter your factory name"}
                  onChangeText={(e) => setfactoryName(e)}
                />
              </View>
              <Spacer height={10} />
              <View style={styles.inputFieldCard}>
              <TextInput
                  style={styles.inputField}
                  keyboardType='number-pad'
                  onChangeText={(e) => setcnic(e)}
                  value={cnic}
                  maxLength={13}
                  name={'CNIC'}
                  placeholder={'Provide Your CNIC'}
              />
          </View>
          <Spacer height={10} />
          <View style={styles.inputFieldCard}>
              <TextInput
                  style={styles.inputField}
                  keyboardType='number-pad'
                  value={ntn}
                  onChangeText={(e) => setntn(e)}
                  maxLength={7}
                  name={'NTN'}
                  placeholder={'Valid NTN Number'}
              />
          </View>
          <Spacer height={30} />
              <TouchableButton
                title={"Confirm"}
                textStyle={{ color: "white" }}
                onPress={() => register(fullName,email, password, factoryName, cnic, ntn)}
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
                  {" "}
                  SIGN IN
                </Text>
              </Text>
              {/* </View> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.manufacturer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (fullName,email, password, factoryName, cnic, ntn) =>
      dispatch(register(fullName,email, password, factoryName, cnic, ntn)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
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

// const mapStateToProps = (state) => {
//     return {
//         user: state.buyer,token:state.buyer.token
//     }
// }
// export mapDispatchToProps = (dispatch) => {
//     return {
//         signIn:(email,password)=>dispatch(signIn(email,password))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Signup);
