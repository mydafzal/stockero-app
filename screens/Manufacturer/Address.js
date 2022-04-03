
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacer from "../../components/Spacer";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import ButtonN from '../../components/ButtonN';
const K_OPTIONS = [
    {
      item: 'Azad Kashmir',
      id: '1',
    },
    {
      item: 'Balochistan',
      id: '2',
    },
    {
      item: 'FATA',
      id: '3',
    },
    {
      item: 'Gilgit Baltistan',
      id: '4',
    },
    {
      item: 'Islamabad Capital Territory',
      id: '5',
    },
    {
      item: 'Kyber Pakhtunkhwa',
      id: '6',
    },
    {
      item: 'Punjab',
      id: '7',
    },
    {
      item: 'Sindh',
      id: '8',
    },
  ]
const Address = () => {
    const [selectedTeam, setSelectedTeam] = useState({})
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Enter your Address
      </Text>
      <Text style={styles.Ftitle}>First Name</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"FirstName"}
          placeholder={"First Name"}
        />
      </View>
      <Text style={styles.Ftitle}>Last Name</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"LastName"}
          placeholder={"Last Name"}
        />
      </View>
      <Text style={styles.Ftitle}>Country</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          value = "Pakistan"
          editable = {false}
          name={"Country"}
        />
      </View>
      <Text style={styles.Ftitle}>Street Address</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"Street"}
          placeholder={"House number and street name"}
        />
      </View>
      <Spacer height={5} />
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"Street2"}
          placeholder={"Apartment, suite, unit, building, floor, etc."}
        />
      </View>
      <Text style={styles.Ftitle}>City</Text>
      <View style={styles.inputFieldCard}>
      <TextInput
          style={styles.inputField}
          name={"City"}
          placeholder={"City Name"}
        />
      </View>
      <View style={{ margin: 30 }}>
      <SelectBox
        label="State"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
        arrowIconColor= '#4F3074'
        searchIconColor= '#4F3074'
        toggleIconColor= '#4F3074'
      />
    </View>
    <Text style={styles.Ftitle}>Postal Code/ZIP</Text>
      <View style={styles.inputFieldCard}>
      <TextInput
          style={styles.inputField}
          name={"postalcode"}
          placeholder={"Enter Postal Code"}
        />
      </View>
      <Spacer height={25} />
    <ButtonN buttonStyle= {{backgroundColor: Colors.primary}}title={'Save Address'} textStyle={{ fontSize: 15, color: Colors.white, }} onPress={() => navigation.navigate('accountselector')} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
};

export default Address;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: Colors.black,
    paddingLeft: 32,
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
});
