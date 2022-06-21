import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SelectBox from "react-native-multi-selectbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import MultiSelect from "react-native-multiple-select";
import { launchImageLibrary } from "react-native-image-picker";
import ButtonN from "../../components/ButtonN";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useListLeftOverMutation } from "../../store/api";
import { addToast, pickImage } from "../../utils";

const Leftovers = ({ navigation }) => {
  const [name, setName] = useState("");
  const [fault, setFault] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [listLeftOver, { isLoading }] = useListLeftOverMutation();
  const [image, setImage] = useState({}); // use this state for image selection

  const handleImageSelection = async () => {
    //call this fucntion in select image button
    pickImage()
      .then((result) => {
        setImage({
          uri: result.uri,
          name: "leftover.jpg",
          type: "image/jpg",
        });
      })
      .catch((error) => {
        addToast(error.message, true);
      });
  };

  const handleAddLeftOver = async () => {
    // this function to be called in addLeftover button
    if (!name.length > 0) {
      addToast("Please fill in all fields and select image", true);
      return;
    }
    try {
      const formData = new FormData(); // complete formdata fields acording to backend fields name, see Add product for more details
      formData.append("name", name);
      const { data, error } = listLeftOver(name);
      if (error) {
        throw new Error(error);
      }
      addToast("Leftover added successfully");
      navigation.goBack();
    } catch (error) {
      addToast("Error occured while registering leftover", true);
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={20} color="white" />
          </TouchableOpacity>

          <Text style={styles.header_label}>List Leftover</Text>
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
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
          <Text style={styles.Ftitle}>Price</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"ProductName"}
              // onChangeText={(e) => setEmail(e)}
              placeholder={"Enter Price"}
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

          <ButtonN
            title={"Next"}
            textStyle={{ color: Colors.primary }}
            onPress={() => navigation.navigate("Leftover Details")}
          />
          <Spacer height={300} />
        </ScrollView>
      </Animatable.View>
    </SafeAreaProvider>
  );
};

export default Leftovers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
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
    marginLeft: "23%",
  },
  header: {
    flex: 0.5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: "flex-end",
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
  backButton: {
    backgroundColor: Colors.primaryLite,
    borderRadius: 10,
    width: 45,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
