import React from "react";
import { View, Text } from "react-native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Signupm from "../screens/Signupm";
import ForgetPassword from "../screens/ForgetPassword";
import NewPassword from "../screens/NewPassword";
import Dashboard from "../screens/Dashboard";
import accountselector from "../screens/accountselector";
import AddP from "../screens/Buyer/AddProducts";
import AllP from "../screens/Buyer/AllProducts";
import ProductD from "../screens/Buyer/ViewProduct";
import Leftovers from "../screens/Buyer/Leftovers";
import LeftoverD from "../screens/Buyer/LeftoverD";
import ListedLeftovers from "../screens/Buyer/ListedLeftovers";
import PaymentMethod from "../screens/Buyer/PaymentMethod";
import Address from "../screens/Buyer/Address";
import AddPD from "../screens/Buyer/AddProductD";
import Wallet from "../screens/Buyer/Wallet";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SplashNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signupm"
        component={Signupm}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="NewPassword"
        component={NewPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="accountselector"
        component={accountselector}
      />
      <Stack.Screen name="Add Products" component={AddP} />
      <Stack.Screen name="Add Product Details" component={AddPD} />
      <Stack.Screen name="All Products" component={AllP} />
      <Stack.Screen name="Product Details" component={ProductD} />
      <Stack.Screen name="List Leftovers" component={Leftovers} />
      <Stack.Screen name="Leftover Details" component={LeftoverD} />
      <Stack.Screen name="Payment Method" component={PaymentMethod} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Listed Leftovers" component={ListedLeftovers} />
      <Stack.Screen name="Wallet" component={Wallet} />
    </Stack.Navigator>
  );
};

export default SplashNavigator;
