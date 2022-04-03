import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import ButtonN from '../../components/ButtonN';
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
      item: 'Manchester United FC',
      id: 'MUN',
    },
    {
      item: 'Manchester City FC',
      id: 'MCI',
    },
    {
      item: 'Everton FC',
      id: 'EVE',
    },
    {
      item: 'Tottenham Hotspur FC',
      id: 'TOT',
    },
    {
      item: 'Chelsea FC',
      id: 'CHE',
    },
    {
      item: 'Liverpool FC',
      id: 'LIV',
    },
    {
      item: 'Arsenal FC',
      id: 'ARS',
    },
  
    {
      item: 'Leicester City FC',
      id: 'LEI',
    },
  ]
const Wallet = () => {
    const [selectedTeam, setSelectedTeam] = useState({})
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
>
    <View style={styles.container}>
      <Text style={styles.title}>
        Stockero will use this Information to clear your Funds. Please fill
        details carefully.
      </Text>
      <Text style={styles.Ftitle}>Holder Name</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"Name"}
          placeholder={"Enter full name"}
        />
      </View>
      <Text style={styles.Ftitle}>Enter your Account Number</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"AccountNumber"}
          placeholder={"Account Number"}
        />
      </View>
      <Text style={styles.Ftitle}>Enter IBAN Number</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"IBANNumber"}
          placeholder={"IBAN Number"}
        />
      </View>
      <Text style={styles.Ftitle}>Select Bank</Text>
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
        arrowIconColor= '#4F3074'
        searchIconColor= '#4F3074'
        toggleIconColor= '#4F3074'
      />
     
    </View>
    <ButtonN buttonStyle= {{backgroundColor: Colors.primary}}title={'Save Details'} textStyle={{ fontSize: 15, color: Colors.white, }} onPress={() => navigation.navigate('accountselector')} />
    </View>
    </KeyboardAvoidingView>
  );
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
};

export default Wallet;
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
    paddingLeft: 16,
    paddingTop: 15,
    paddingBottom: 12,
  },
  inputFieldCard: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
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
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
});
