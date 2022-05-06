import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ButtonSmall from "../../components/ButtonSmall";
import Spacer from "../../components/Spacer";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { GetProducts, deleteProduct } from "../../redux/product/product.action";
import { useEffect } from "react";
const AllProducts = () => {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  useEffect(() => {
    if (products.isLoading) {
      alert("loading");
    }
  }, [products.isLoading]);
  useEffect(() => {
    console.log(products);
  }, [products]);
  const DATA = products;
  const renderItem = ({ item }) => (
    <View style={styles.Box}>
      <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.name}</Text>
        <Text numberOfLines={3} style={styles.description}>
              {/* {item.description.length < 50
                ? `${item.description}`
                : `${item.description.substring(0, 50)}...`} */}
                { item.description ? (item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description):true}
            </Text>
      </View>
      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <ButtonSmall
          buttonStyle={{
            marginTop: 15,
            backgroundColor: Colors.redLite,
            marginRight: 15,
          }}
          textStyle={{ color: Colors.red }}
          title="Delete"
          onPress={() => dispatch(deleteProduct(item.id))}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : ( */}
        {/* <View> */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        {/* </View>
      )} */}
      {/* {isLoading && <ActivityIndicator size="large" color="#0000ff" />} */}
    </SafeAreaView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  Box: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#E7E7E9",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  productNameCard: {
    alignSelf: "center",
    width: "50%",
    height: 70,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "black",
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "black",
    padding: 22,
  },
  notiftext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: Colors.gray,
  },
  time: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: Colors.gray,
  },
  description: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: Colors.gray,
  },
});
