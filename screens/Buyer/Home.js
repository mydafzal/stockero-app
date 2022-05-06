import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import ButtonSmall from "../../components/ButtonSmall";
const width = Dimensions.get("window").width / 2 - 30;
const product = [
  {
    id: 1,
    name: "Sublimation Printing",
    price: "39.99",
    like: true,
    img: require("../../assets/images/t-shirt.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 2,
    name: "Footballs",
    price: "29.99",
    like: false,
    img: require("../../assets/images/football.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Leather Jackets",
    price: "25.99",
    like: false,
    img: require("../../assets/images/jacket.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 4,
    name: "Travelling Bag",
    price: "25.99",
    like: true,
    img: require("../../assets/images/bag.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Hockey",
    price: "25.99",
    like: true,
    img: require("../../assets/images/hockey.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    name: "Leather Gloves",
    price: "25.99",
    like: true,
    img: require("../../assets/images/gloves.png"),
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const Home = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
  const categories = ["All"];
  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Bid Screen", plant)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              // style={{
              //   width: 80,
              //   height: 30,
              //   borderRadius: 10,
              //   marginBottom: 10,
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   backgroundColor: plant.like
              //     ? 'rgba(245, 42, 42,0.2)'
              //     : 'rgba(0,0,0,0.2) ',
              // }}>
              style={{
                marginBottom: 30,
              }}
            >
              {/* <Icon
                name="favorite"
                size={18}
                color={plant.like ? Colors.red : Colors.black}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: "center",
            }}
          >
            <Image
              source={plant.img}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            {/* <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${plant.price}
            </Text> */}
            <View style={{ alignItems: "center" }}>
              <ButtonSmall
                buttonStyle={{ backgroundColor: Colors.green, width: 150 }}
                textStyle={{ color: "white" }}
                title="Request"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.white }}
    >
      <View style={style.header}>
        <View>
          <Text style={style.Text}>Welcome</Text>
        </View>
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        {/* <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={Colors.white} />
        </View> */}
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "center", flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={product}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    // marginTop: 30,
    // marginBottom: 20,
    justifyContent: "space-between",
    margin: 20,
  },
  categoryText: {
    fontSize: 14,
    color: "grey",
    fontFamily: "Poppins_500Medium",
  },
  categoryTextSelected: {
    color: Colors.primary,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  Text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "#000",
  },
  lsText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: Colors.primary,
  },
  card: {
    height: 225,
    backgroundColor: Colors.light,
    width,
    // marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginEnd: 10,
    marginStart: 10,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  searchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: Colors.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
