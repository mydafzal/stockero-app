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
import MultiSelect from "react-native-multiple-select";
import { launchImageLibrary } from "react-native-image-picker";
import ButtonN from "../../components/ButtonN";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
import { xorBy } from 'lodash';
import { SafeAreaView } from "react-native-safe-area-context";
const types = [
  {
    item: "Sports",
    id: "SP",
  },
  {
    item: "Clothing",
    id: "CL",
  },
  {
    item: "Wood Products",
    id: "WD",
  },
  {
    item: "Paper Products",
    id: "PP",
  },
  {
    item: "Electronics",
    id: "EL",
  },
  {
    item: "Others",
    id: "OT",
  },
];
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
const LeftoverD = ({ navigation }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.Ftitle}>Duration</Text>
      <View style={styles.inputFieldCard}>
        <TextInput
          style={styles.inputField}
          name={"ProductName"}
          // onChangeText={(e) => setEmail(e)}
          placeholder={"Enter Days"}
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
      <View style={{ padding: 30 }}>
        <SelectBox
          label="Select Product Type"
          options={types}
          selectedValues={selectedTypes}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          arrowIconColor="#4F3074"
          searchIconColor="#4F3074"
          toggleIconColor="#4F3074"
          isMulti
        />
      </View>
      <Spacer height={30} />
      <ButtonN
        buttonStyle={{backgroundColor:Colors.primary}}
        title={"Post"}
        textStyle={{ color: Colors.white }}
        onPress={() => navigation.navigate("Add Product Details")}
      />
    </SafeAreaView>
  );
  function onMultiChange() {
    return (types) => setSelectedTypes(xorBy(selectedTypes, [types], "id"));
  }
};

export default LeftoverD;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    height: "30%",
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
