import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Image,
  Alert,
  Modal,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import SelectBox from "react-native-multi-selectbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import MultiSelect from "react-native-multiple-select";
import * as ImagePicker from "expo-image-picker";
import ButtonN from "../../components/ButtonN";
import { xorBy } from "lodash";
import axios from "axios";
import { LogBox } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { addProduct } from "../../redux/product/product.action";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingButton from "../../components/SettingButton";
import ButtonSmall from "../../components/ButtonSmall";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
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
const CustomStatusBar = ({
  backgroundColor,
  barStyle = "dark-content",
  //add more props StatusBar
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
const AddProducts = ({ navigation, user, addProduct }) => {
  const [productName, setproductName] = useState("");
  const [productDecsription, setproductDecsription] = useState("");
  const [productImage, setproductImage] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [manufacturerID, setmanufacturerID] = useState();
  const [base64, setBase64] = useState("");
  const [modal, setModal] = useState(false);
  const [text, onChangeText] = React.useState();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [photo, setPhoto] = React.useState("");
  const descriptionRef = useRef(null);
  const [upload, setupload] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      setPhoto(result.uri);
      const data = {
        file: `data:image/jpeg;base64,${result.base64}`,
        upload_preset: "stockero",
      };
      axios
        .post("https://api.cloudinary.com/v1_1/stockero/image/upload", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setupload(res.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(result);
      //handleUpload(result);
    }
  };

  const handleUpload = (photo) => {
    // const data = new FormData();
    // data.append('file', photo)
    // data.append('upload_preset', 'stockero')
    // data.append('cloud_name', 'stockero')
    //   fetch('https://api.cloudinary.com/v1_1/Stockero/image/upload', {
    //     method: 'post',
    //     body: data,
    //     headers:{
    //       'Accept':'application/json',
    //       'Content-Type':'multipart/form-data'
    //   }
    //   }).then((res) => res.json())
    //     .then((data) => {
    //       // setPhoto(data.url)
    //       setModal(false)
    //       console.log(data)
    //   }).catch(err => {
    //     console.log(err)
    //     Alert.alert("Error While Uploading")
    // })
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

          <Text style={styles.header_label}>Add Product</Text>
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.Ftitle}>Product Name</Text>
          <View style={styles.inputFieldCard}>
            <TextInput
              style={styles.inputField}
              name={"ProductName"}
              onChangeText={(e) => setproductName(e)}
              placeholder={"Please enter the product name"}
            />
          </View>
          <Text style={styles.Ftitle}>Description</Text>
          <View
            style={styles.dFieldCard}
            onPress={() => descriptionRef.current.focus()}
          >
            <TextInput
              ref={descriptionRef}
              style={styles.dField}
              multiline={true}
              style={[styles.inputField]}
              name={"Description"}
              onChangeText={(e) => setproductDecsription(e)}
              placeholder={"Please add product description"}
            />
          </View>
          {/* <Spacer height={10} /> */}
          <View style={{ padding: 30 }}>
            <SelectBox
              label="Select Product Category"
              options={types}
              value={selectedTypes}
              onChange={onChange()}
              hideInputFilter={false}
              arrowIconColor={Colors.primary}
              searchIconColor={Colors.primary}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.Ftitle}>Upload Images</Text>
            {photo !== "" ? (
              <TouchableOpacity onPress={() => setPhoto("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color="#717171"
                  style={{ alignSelf: "center", marginRight: 30 }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.uploadBox}>
            {photo === "" ? (
              <Ionicons
                name="cloud-upload"
                size={25}
                color="#717171"
                style={{ alignSelf: "center" }}
              />
            ) : null}
            {photo !== "" ? (
              <>
                <Image
                  source={{ uri: photo }}
                  style={{ width: "100%", height: "100%" }}
                  onPress={() => pickImage()}
                />
              </>
            ) : (
              <Button title="Choose File" onPress={pickImage} />
            )}
            {/* {photo === ""? (
          <Button title="Choose File" onPress={pickImage} />
        ) : null} */}
          </View>
          <Spacer height={20} />
          <ButtonN
            buttonStyle={{ backgroundColor: Colors.primaryLite }}
            title={"Add Product"}
            textStyle={{ color: Colors.primary }}
            onPress={() => {
              upload !== ""
                ? addProduct(
                    productName,
                    productDecsription,
                    upload,
                    selectedTypes.item,
                    user.user.id
                  )
                : alert("wait for uploading");
            }}
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaProvider>
  );
  function onChange() {
    return (val) => setSelectedTypes(val);
  }
};
const mapStateToProps = (state) => {
  return {
    user: state.buyer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (
      productName,
      productDecsription,
      productCategory,
      productImage,
      m_id
    ) =>
      dispatch(
        addProduct(
          productName,
          productDecsription,
          productCategory,
          productImage,
          m_id
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
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

  backButton: {
    backgroundColor: Colors.primaryLite,
    borderRadius: 10,
    width: 45,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
