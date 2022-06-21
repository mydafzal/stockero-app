import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ButtonSmall from "../../components/ButtonSmall";
import { useEffect } from "react";
import { useGetProductsQuery } from "../../store/api";
import { addToast } from "../../utils";
import { pathOr } from "ramda";

const AllProducts = () => {
  const { data, isSuccess, isError, refetch, isLoading } =
    useGetProductsQuery();

  useEffect(() => {
    if (isError) {
      addToast("Something went wrong", false);
    }
  }, [isError]);

  const renderItem = ({ item }) => (
    <View style={styles.Box}>
      <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.name}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {item?.description
            ? item?.description.length > 100
              ? item?.description.slice(0, 100) + "..."
              : item?.description
            : true}
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
          // onPress={() => dispatch(deleteProduct(item.id))}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pathOr([], ["data"], data)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
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
