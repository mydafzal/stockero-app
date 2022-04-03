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
const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};
const AddProducts = ({ navigation }) => {
  
  const [photo, setPhoto] = React.useState(null);
  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: "POST",
      body: createFormData(photo, { userId: "123" }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.Headtitle}>Provide the following Information</Text>
      </View>
      <Text style={styles.Ftitle}>Product Name</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"ProductName"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Please enter the product name"}
        />
      </View>
      <Text style={styles.Ftitle}>Description</Text>
      <View style={styles.dFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"Description"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Please add product description"}
        />
      </View>
      <Text style={styles.Ftitle}>Upload Images</Text>
      <View style={styles.uploadBox}>
        <Ionicons
          name="cloud-upload"
          size={25}
          color="#717171"
          style={{ alignSelf: "center" }}
        />
        {photo && (
          <>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            <Button title="Upload Photo" onPress={handleUploadPhoto} />
          </>
        )}
        <Button title="Choose File" onPress={handleChoosePhoto} />
      </View>
      <Spacer height={30} />
      <ButtonN title={"Next"} textStyle={{ color: Colors.primary }} onPress={() => navigation.navigate("Add Product Details")}/>
    </ScrollView>
  );
};

export default AddProducts;
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
