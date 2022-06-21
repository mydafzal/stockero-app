import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import ButtonSmall from "../../components/ButtonSmall";
import Spacer from "../../components/Spacer";
import { useGetLeftOversQuery } from "../../store/api";
import { useSelector } from "react-redux";
import { authSliceSelector } from "../../store/slice/authSlice";
import { addToast } from "../../utils";

const ListedLeftovers = () => {
  const { userMeta } = useSelector(authSliceSelector);
  const { data, isLoading, isError, refetch, error } = useGetLeftOversQuery(
    userMeta?.id
  );

  useEffect(() => {
    if (isError) {
      console.log(error);
      addToast("Error Occured while fetching leftovers", true);
    }
  }, [isError]);

  const renderItem = ({ item }) => (
    <View style={styles.Box}>
      <View style={styles.productNameCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.quantity}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Text style={styles.text}>{item.duration}</Text>
      </View>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <ButtonSmall
          buttonStyle={{
            marginTop: 15,
            backgroundColor: Colors.redLite,
            marginRight: 15,
          }}
          textStyle={{ color: Colors.red }}
          title="Delete"
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </SafeAreaView>
  );
};

export default ListedLeftovers;

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
    width: "35%",
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "black",
  },
  Headtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "black",
    padding: 22,
  },
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: Colors.gray,
  },
  time: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: Colors.gray,
  },
});
