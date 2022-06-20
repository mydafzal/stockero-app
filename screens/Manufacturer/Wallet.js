import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacer from "../../components/Spacer";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import * as Animatable from "react-native-animatable";
import ButtonN from "../../components/ButtonN";
const K_OPTIONS = [
  {
    item: 'Al Baraka Bank (Pakistan) Limited',
    id: '1',
  },
  {
    item: 'Allied Bank Limited',
    id: '2',
  },
  {
    item: 'Askari Bank',
    id: '3',
  },
  {
    item: 'Bank Alfalah Limited',
    id: '4',
  },
  {
    item: 'Bank Al-Habib Limited',
    id: '5',
  },
  {
    item: 'Bank Islami Pakistan Limited',
    id: '6',
  },
  {
    item: 'Burj Bank Limited',
    id: '7',
  },
  {
    item: 'Deutsche Bank',
    id: '8',
  },
  {
    item: 'Dubai Islamic Bank Pakistan Limited',
    id: '9',
  },
  {
    item: 'Faysal Bank Limited',
    id: '10',
  },
  {
    item: 'First Women Bank Limited',
    id: '11',
  },
  {
    item: 'Habib Bank Limited',
    id: '12',
  },
  {
    item: 'Habib Metropolitan Bank Limited',
    id: '13',
  },
  {
    item: 'Industrial And Commercial Bank Of Chaina',
    id: '14',
  },
  {
    item: 'JS Bank Limited',
    id: '15',
  },
  {
    item: 'MCB Bank Limited',
    id: '16',
  },
  {
    item: 'MCB Islamic Bank Limited',
    id: '17',
  },
  {
    item: 'Meezan Bank Limited',
    id: '18',
  },
  {
    item: 'National Bank Of Pakistan',
    id: '19',
  },
  {
    item: 'NIB Bank Limited',
    id: '20',
  },
  {
    item: 'S.M.E. Bank Limited',
    id: '21',
  },
  {
    item: 'Samba Bank Limited',
    id: '22',
  },
  {
    item: 'Silk Bank Limited',
    id: '23',
  },
  {
    item: 'Sindh Bank Limited',
    id: '24',
  },
  {
    item: 'Soneri Bank Limited',
    id: '25',
  },
  {
    item: 'Standard Chartered Bank Pakistan Limited',
    id: '26',
  },
  {
    item: 'Summit Bank Limited',
    id: '27',
  },
  {
    item: 'The Bank Of Khyber',
    id: '28',
  },
  {
    item: 'The Bank Of Punjab',
    id: '29',
  },
  {
    item: 'The Punjab Provincial Cooperative Bank Limited',
    id: '30',
  },
  {
    item: 'Ubl Bank Limited',
    id: '31',
  },
  {
    item: 'Zarai Taraqiati Bank Limited',
    id: '32',
  },
];
const Wallet = ({ navigation }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={20} color="white" />
          </TouchableOpacity>

          <Text style={styles.header_label}>Payment Method</Text>
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View>
          <Spacer height={20} />
          <Text style={styles.Ftitle}>Holder Name</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"Name"}
              placeholder={"Enter full name"}
            />
          </View>
          <Spacer height={20} />
          <Text style={styles.Ftitle}>Enter your Account Number</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"AccountNumber"}
              placeholder={"Account Number"}
            />
          </View>
          <Spacer height={20} />
          <Text style={styles.Ftitle}>Enter IBAN Number</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"IBANNumber"}
              placeholder={"IBAN Number"}
            />
          </View>

          <View style={{ margin: 30 }}>
            <SelectBox
              label="Select Bank"
              options={K_OPTIONS}
              value={selectedTeam}
              onChange={onChange()}
              hideInputFilter={false}
              arrowIconColor="#4F3074"
              searchIconColor="#4F3074"
              toggleIconColor="#4F3074"
            />
          </View>
          <ButtonN
            buttonStyle={{ backgroundColor: Colors.primaryLite }}
            title={"Save Details"}
            textStyle={{ fontSize: 15, color: Colors.primary }}
            onPress={() => navigation.navigate("accountselector")}
          />
        </View>
      </Animatable.View>
    </View>
    // </KeyboardAvoidingView>
  );
  function onChange() {
    return (val) => setSelectedTeam(val);
  }
};

export default Wallet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 0.5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 30,
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
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "white",
    marginLeft: "17%",
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: Colors.black,
    paddingLeft: 25,
    paddingTop: 30,
    paddingBottom: 12,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "85%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  inputField: {
    padding: 15,
    width: "100%",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  Ftitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: Colors.gray,
    paddingLeft: 35,
    paddingTop: 12,
    paddingBottom: 12,
  },
  backButton: {
    backgroundColor: Colors.primaryLite,
    borderRadius: 10,
    width: 45,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
