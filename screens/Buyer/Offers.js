import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import ButtonN from "../../components/ButtonSmall";
import { useSelector } from "react-redux";
import {
  useGetOffersQuery,
  useApproveOfferMutation,
  useRejectOfferMutation,
} from "../../store/api";
import { authSliceSelector } from "../../store/slice/authSlice";
import Loader from "../../components/Loader";
import { addToast } from "../../utils";

const Offers = () => {
  const { userMeta } = useSelector(authSliceSelector);
  const { data, isError, isSuccess, isLoading, refetch } = useGetOffersQuery(
    userMeta?.id
  );
  const [approveOffer, { isLoading: approveLoader }] =
    useApproveOfferMutation();
  const [rejectOffer, { isLoading: rejectLoader }] = useRejectOfferMutation();

  useEffect(() => {
    if (isError) {
      addToast("Error Occured While Fetching Offers", true);
    }
  }, [isError]);

  const handleApprove = async (
    buyer_id,
    manufacturer_id,
    name,
    details,
    quantity,
    offered_price,
    offered_duration,
    asking_price,
    id
  ) => {
    try {
      const { data, error } = await approveOffer({
        buyer_id,
        manufacturer_id,
        name,
        details,
        quantity,
        offered_price,
        offered_duration,
        asking_price,
        id,
      });
      if (error) {
        throw new Error(error);
      }
      addToast("Offer Approved", false);
    } catch (error) {
      addToast("Error Occured While Approving Offer", true);
    }
  };
  const handleReject = async (id) => {
    try {
      const { data, error } = await rejectOffer(id);
      if (error) {
        throw new Error(error);
      }
      addToast("Offer Rejected", false);
    } catch (error) {
      addToast("Error occured while reject offer", true);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.notiBox}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.notiftext}>{item.quantity}</Text>
        <Text style={styles.notiftext}>{item.description}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 30,
          }}
        >
          <ButtonN
            buttonStyle={{ width: "50%", height: "70%" }}
            title={"Accept"}
            textStyle={{ color: Colors.primary }}
            onPress={() => {
              handleApprove(
                item?.buyer_id,
                item?.manufacturer_id,
                item?.name,
                item?.description,
                item?.quantity,
                item?.offered_price,
                item?.offered_duration,
                item?.asking_price,
                item?.id
              );
            }}
          />
          <ButtonN
            buttonStyle={{ width: "50%", height: "70%" }}
            title={"Reject"}
            onPress={() => handleReject(item?.id)}
            textStyle={{ color: Colors.red }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Headtitle}>Offers</Text>
      {isSuccess && (
        <FlatList
          data={data?.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        />
      )}
      <Loader isLoading={isLoading || rejectLoader || approveLoader} />
    </SafeAreaView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notiBox: {
    backgroundColor: "#ffffff",
    paddingTop: 30,
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
});
