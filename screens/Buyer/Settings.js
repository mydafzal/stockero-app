import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingButton from "../../components/SettingButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { logout } from "../../store/slice/authSlice";
const Settings = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Headtitle}>Settings</Text>
      <Text style={styles.Stitle}>Account Settings</Text>
      <View style={styles.Box}>
        <SettingButton
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
        />
        <SettingButton
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
        />
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
              onPress={() => navigation.navigate("Add Products")}
            />
          }
          title={"Logout"}
          textStyle={{ color: "#373737" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
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
    fontSize: 25,
    color: "black",
    padding: 22,
  },
});
