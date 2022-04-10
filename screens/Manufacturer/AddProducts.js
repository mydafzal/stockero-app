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
  Modal
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
import { addProduct } from "../../redux/product/product.action";
import { TouchableOpacity } from "react-native-gesture-handler";
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
const AddProducts = ({ navigation, user ,addProduct}) => {
  const [productName, setproductName] = useState("");
  const [productDecsription, setproductDecsription] = useState("");
  const [productImage, setproductImage] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [manufacturerID, setmanufacturerID] = useState();
  const [base64, setBase64] = useState("");
  const [modal ,setModal] = useState(false);
  const [text, onChangeText] = React.useState();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [photo, setPhoto] = React.useState("");
  const descriptionRef = useRef(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true,
    });
    if (!result.cancelled) {
      setPhoto(result.uri);
      setBase64(`data:image/jpeg;base64,${result.base64}`);
      //console.log(result);
      handleUpload(result);
    }
  };

  const handleUpload = (photo) => {
    // const data = new FormData();
    // data.append('file', photo)
    // data.append('upload_preset', 'stockero')
    // data.append('cloud_name', 'stockero')
    const data={
      file:base64,
      upload_preset:'stockero',
    }
    axios.post("https://api.cloudinary.com/v1_1/stockero/image/upload",data,{headers:{
      'Content-Type': 'application/json',

    }}).then((res)=>{
      setPhoto(res.data.url);
    }).catch((err)=>{
      console.log(err);
    })
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

  }
  

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 5 }}>
        <Text style={styles.Headtitle}>Provide the following Information</Text>
      </View>
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
      <Spacer height={10} />
      <View style={{ padding: 30 }}>
         <SelectBox
        label="Select Product Category"
        options={types}
        value={selectedTypes}
        onChange={onChange((e) => setproductCategory(e))}
        hideInputFilter={false}
        arrowIconColor={Colors.primary}
        searchIconColor={Colors.primary}
      />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
        {photo !==""? (
          <>
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%" }}
              onPress={()=>pickImage()}
            />
          </>
        ):<Button title="Choose File" onPress={pickImage} />}
        {/* {photo === ""? (
          <Button title="Choose File" onPress={pickImage} />
        ) : null} */}
      </View>
      <Spacer height={20} />
      <ButtonN
        buttonStyle={{ backgroundColor: Colors.primary }}
        title={"Add Product"}
        textStyle={{ color: Colors.white }}
        onPress={() => {console.log(user) ;addProduct(productName, productDecsription, photo, productCategory, user.user.id);}}
      />
    </View>
  );
  function onChange() {
    return (val) => setSelectedTypes(val)
  }
};
const mapStateToProps = (state) => {
  return {
    user: state.buyer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (productName, productDecsription,productImage ,productCategory, m_id) =>
      dispatch(addProduct(productName, productDecsription,productImage, productCategory, m_id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddProducts);
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
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "85%",
    height: "18%",
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
