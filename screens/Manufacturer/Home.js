import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../../components/Spacer";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>Welcome Back!</Text>
        <Spacer height={5} />
        <Text style={styles.Texts}>See what's happening</Text>
      </View>
      <View style={styles.main}>
        <Spacer height={50} />
        <View style={styles.innerContainer}>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="cube"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("Add Products")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("Add Products")}
              >
                Add Products
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="gift"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("All Products")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("All Products")}
              >
                My Products
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="server"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("List Leftovers")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("List Leftovers")}
              >
                List Leftovers
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="bar-chart"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("Listed Leftovers")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("Listed Leftovers")}
              >
                Listed Leftovers
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="logo-usd"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("Wallet")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("Wallet")}
              >
                Payment Method
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Ionicons
                name="location"
                size={35}
                color="#373737"
                style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("Address")}
              />

              <Text
                style={styles.boxFont}
                onPress={() => navigation.navigate("Address")}
              >
                Physical Address
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F3074",
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 20,
  },
  main: {
    flex: 2,
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "#fff",
  },
  Texts: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#fff",
  },
  innerContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  
  },
  box: {
    width: "40%",
    height: "30%",
    padding: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(130, 126, 247, 0.1)",
    borderRadius: 20,
    alignItems: "center",
  },
  boxFont: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    paddingTop: 15,
  },
});
