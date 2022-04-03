import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import SelectBox from "react-native-multi-selectbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import MultiSelect from 'react-native-multiple-select';
import { launchImageLibrary } from "react-native-image-picker";
import ButtonN from "../../components/ButtonN";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
const Leftovers = ({ navigation }) => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.Headtitle}>Provide the following Information</Text>
      </View>
      <Text style={styles.Ftitle}>Leftover Name</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"ProductName"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Please Enter Name"}
        />
      </View>
      <Text style={styles.Ftitle}>What is the fault?</Text>
      <View style={styles.dFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"Description"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Please expalin briefly"}
        />
      </View>
      <Text style={styles.Ftitle}>Quantity</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"ProductName"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Must not be less tha 10"}
        />
      </View>
      <Text style={styles.Ftitle}>Price</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"ProductName"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Enter Price"}
        />
      </View>
      <Spacer height={30} />
      <ButtonN title={"Next"} textStyle={{ color: Colors.primary }} onPress={() => navigation.navigate("Leftover Details")}/>
    </ScrollView>
  );
};

export default Leftovers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
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
    height: 60,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  dFieldCard: {
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
    height: "30%",
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
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
    color: "black",
    padding: 22,
  },
});
