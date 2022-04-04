import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import headerart from "../assets/images/headerart.png";
import TouchableButton from "../components/TouchableButton";
import bg from "../assets/images/bg.png";
import manu from "../assets/images/manufacturer.png";
import buyer from "../assets/images/customer.png";
import Colors from "../constants/Colors";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get('window').width / 1 - 100;

const accountselector = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.outerbody}>
        <View style={styles.body}>
          <Text style={styles.title}>Please Select</Text>
          <Spacer height={10} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Signupm")}
          >
            <View style={styles.selectorbox}>
            <Ionicons
                name="business"
                size={30}
                color="#373737"
                
                onPress={() => navigation.navigate("Add Products")}
              />
              {/* <Image source={manu} style={styles.imageStyle}></Image>           */}
              <Text
                style={styles.textStyle}
                onPress={() => navigation.navigate("Signupm")}
              >
                Manufacturer
              </Text>
            </View>
          </TouchableOpacity>
          <Spacer height={10} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Dashboard Buyer")} 
          >
          <View style={styles.selectorbox}>
          <Ionicons
                name="person"
                size={30}
                color="#373737"
               
                onPress={() => navigation.navigate("Add Products")}
              />
            {/* <Image source={buyer} style={styles.imageStyle}></Image> */}
            <Text
              style={styles.textStyle}
              onPress={() => navigation.navigate("Dashboard Buyer")}
            >
              Buyer
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default accountselector;
const styles = StyleSheet.create({
  container: {
      
    paddingTop: 5,
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#FBFCFC",
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
    // top: '35%',
    // alignSelf:'center',
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: Colors.darkGray,
  },
  imageStyle: {
    // // marginLeft: 30,
    alignItems: "center",
    height: "100%",
    width: "10%",
    flex: 1, 
    resizeMode: 'contain',
  },
  textStyle: {
    alignSelf: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: Colors.darkGray,
    paddingLeft: 30,
  },

  selectorbox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 70,
    backgroundColor: Colors.primaryLite,
    borderColor: Colors.primary,
    borderWidth: 1,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    // marginBottom: 20,
    padding: 15,
    
  },
});
