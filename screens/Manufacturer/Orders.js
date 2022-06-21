import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { useEffect } from "react";
import { useGetOrdersQuery } from "../../store/api";
import { addToast } from "../../utils";
import { pathOr } from "ramda";

const Orders = ({ navigation }) => {
  const { data, isError, refetch, isLoading } = useGetOrdersQuery();

  useEffect(() => {
    if (isError) {
      addToast("Error occured while fetching errors", true);
    }
  }, [isError]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.notiBox}
        onPress={() => navigation.navigate("OrderDetail", { item: item })}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Name: </Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Quantity: </Text>
          <Text style={styles.text}>{item.quantity}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textheading}>Status: </Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Headtitle}>Orders</Text>
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

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notiBox: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    borderColor: "#E7E7E9",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "black",
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
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
  textheading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: Colors.black,
  },
});
