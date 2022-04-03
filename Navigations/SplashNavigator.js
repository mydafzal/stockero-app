import React from "react";
import { View, Text } from "react-native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Signupm from "../screens/Signupm";
import ForgetPassword from "../screens/ForgetPassword";
import NewPassword from "../screens/NewPassword";
import Dashboard from "../screens/Manufacturer/Dashboard";
import DashboardB from "../screens/Buyer/Dashboard";
import accountselector from "../screens/accountselector";
import AddP from "../screens/Manufacturer/AddProducts";
import AllP from "../screens/Manufacturer/AllProducts";
import ProductD from "../screens/Manufacturer/ViewProduct";
import Leftovers from "../screens/Manufacturer/Leftovers";
import LeftoverD from "../screens/Manufacturer/LeftoverD";
import ListedLeftovers from "../screens/Manufacturer/ListedLeftovers";
import PaymentMethod from "../screens/Manufacturer/PaymentMethod";
import Address from "../screens/Manufacturer/Address";
import AddPD from "../screens/Manufacturer/AddProductD";
import Wallet from "../screens/Manufacturer/Wallet";
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard Buyer"
        component={DashboardB}
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
