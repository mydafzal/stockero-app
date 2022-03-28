import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
const SettingButton = ({
  containerStyle,
  buttonStyle,
  textStyle,
  title,
  icon,
  //internalStyle,
  ...rest
}) => {
  console.log(title);
  return (
    <View style={[Styles.container, containerStyle]}>
      <TouchableOpacity {...rest} style={[Styles.button, buttonStyle]}>
        <View styles={Styles.buttonInternal}>
        <View style={{ flexDirection: 'row' }} >
          <View>
          {icon}
          </View>
          <Text style={[Styles.buttonText, textStyle]}> {title} </Text>
          {/* <Ionicons
            name="chevron-forward-outline"
            size={15}
            color="#373737"
            style={{  }}
            
          /> */}
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SettingButton;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    height: 45,
    
    
  },
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E7E7E9',
    justifyContent: "center",
  },
  buttonInternal: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
});
