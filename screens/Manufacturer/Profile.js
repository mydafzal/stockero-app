import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SettingButton from "../../components/SettingButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/authSlice";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Headtitle}>Settings</Text>
      <Text style={styles.Stitle}>Factory Settings</Text>
      <View style={styles.Box}>
        {/* <SettingButton
          icon={
            <Ionicons
              name="create"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Factory Details"}
          textStyle={{ color: "#373737" }}
        /> */}
        {/* <View
          style={{
            borderBottomColor: "#E7E7E9",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
          }}
        /> */}
        <SettingButton
          icon={
            <Ionicons
              name="location"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Address"}
          textStyle={{ color: "#373737" }}
          onPress={() => navigation.navigate("Address")}
        />
        <View
          style={{
            borderBottomColor: "#E7E7E9",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
          }}
        />
        <SettingButton
          icon={
            <Ionicons
              name="cube"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"My Products"}
          textStyle={{ color: "#373737" }}
        />
        <View
          style={{
            borderBottomColor: "#E7E7E9",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
          }}
        />
        <SettingButton
          icon={
            <Ionicons
              name="close-circle"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Delete Products"}
          textStyle={{ color: "#373737" }}
        />
      </View>
      <Text style={styles.Stitle}>Wallet</Text>
      <View style={styles.Box}>
        <SettingButton
          icon={
            <Ionicons
              name="cash"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Payment Details"}
          textStyle={{ color: "#373737" }}
          onPress={() => navigation.navigate("Wallet")}
        />
      </View>
      <Text style={styles.Stitle}>Account Settings</Text>
      <View style={styles.Box}>
        {/* <SettingButton
          icon={
            <Ionicons
              name="person"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Profile"}
          textStyle={{ color: "#373737" }}
        />
        <View
          style={{
            borderBottomColor: "#E7E7E9",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
          }}
        /> */}
        {/* <SettingButton
          icon={
            <Ionicons
              name="build"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Change Password"}
          textStyle={{ color: "#373737" }}
        />
        <View
          style={{
            borderBottomColor: "#E7E7E9",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
          }}
        /> */}
        <SettingButton
          onPress={() => {
            dispatch(logout());
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
          icon={
            <Ionicons
              name="log-out"
              size={14}
              color="#373737"
              style={{ alignSelf: "center", paddingLeft: 15 }}
            />
          }
          title={"Logout"}
          textStyle={{ color: "#373737" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Box: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  Stitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: Colors.gray,
    paddingLeft: 22,
    paddingBottom: 12,
    paddingTop: 12,
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "black",
    padding: 22,
  },
});
