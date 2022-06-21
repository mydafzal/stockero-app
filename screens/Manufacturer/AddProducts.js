import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import SelectBox from "react-native-multi-selectbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonN";
import Spacer from "../../components/Spacer";
import * as Animatable from "react-native-animatable";
import { useAddProductMutation } from "../../store/api";
import { pickImage, addToast } from "../../utils";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import { authSliceSelector } from "../../store/slice/authSlice";

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

const AddProducts = ({ navigation }) => {
  const [productName, setproductName] = useState("");
  const [productDecsription, setproductDecsription] = useState("");
  const [productImage, setproductImage] = useState({});
  const [manufacturerID, setmanufacturerID] = useState();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const descriptionRef = useRef(null);
  const { userMeta } = useSelector(authSliceSelector);

  const [AddProduct, { isLoading }] = useAddProductMutation();
  const handleImagePicker = async () => {
    pickImage()
      .then((result) => {
        setproductImage({
          uri: result.uri,
          name: "Product.jpg",
          type: "image/jpg",
        });
      })
      .catch((error) => {
        addToast(error.message, true);
      });
  };

  const handleAddProduct = async () => {
    const { message, status } = validateData();
    if (!status) {
      addToast(message, true);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", productDecsription);
      formData.append("category", selectedTypes?.item);
      formData.append("m_id", userMeta?.id);
      formData.append("img", productImage);
      const { data, error } = await AddProduct(formData);
      if (error) {
        throw new Error(error);
      }
      addToast("Product added successfully", false);
      navigation.goBack();
    } catch (error) {
      addToast("Error Occured While Adding a product", true);
    }
  };

  const validateData = () => {
    if (!productName.length > 0) {
      return {
        message: "Please enter product name",
        status: false,
      };
    } else if (!productDecsription.length > 0) {
      return {
        message: "Please enter product description",
        status: false,
      };
    } else if (!selectedTypes?.item) {
      return {
        message: "Please enter product category",
        status: false,
      };
    } else if (!Object.keys(productImage).length > 0) {
      return {
        message: "Please select product image",
        status: false,
      };
    } else {
      return {
        message: "",
        status: true,
      };
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

          <Text style={styles.header_label}>Add Product</Text>
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
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
            // style={styles.dField}
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
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.Ftitle}>Upload Images</Text>
          {Object.keys(productImage).length !== 0 && (
            <TouchableOpacity onPress={() => setproductImage({})}>
              <Ionicons
                name="close-circle"
                size={20}
                color="#717171"
                style={{ alignSelf: "center", marginRight: 30 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.uploadBox}>
          {Object.keys(productImage).length === 0 && (
            <Ionicons
              name="cloud-upload"
              size={25}
              color="#717171"
              style={{ alignSelf: "center" }}
            />
          )}
          {Object.keys(productImage).length !== 0 ? (
            <>
              <Image
                source={{ uri: productImage.uri }}
                style={{ width: "100%", height: "100%" }}
                onPress={() => handleImagePicker()}
              />
            </>
          ) : (
            <Button title="Choose File" onPress={handleImagePicker} />
          )}
        </View>
        <Spacer height={20} />
        <ButtonN
          buttonStyle={{ backgroundColor: Colors.primaryLite }}
          title={"Add Product"}
          textStyle={{ color: Colors.primary }}
          onPress={handleAddProduct}
        />
      </Animatable.View>
      <Loader isLoading={isLoading} />
    </SafeAreaProvider>
  );
  function onChange() {
    return (val) => setSelectedTypes(val);
  }
};

export default AddProducts;

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
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "85%",
    height: "20%",
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
