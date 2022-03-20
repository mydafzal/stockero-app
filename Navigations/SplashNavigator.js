import React from 'react'
import { View, Text } from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Signupm from '../screens/Signupm';
import ForgetPassword from '../screens/ForgetPassword';
import Dashboard from '../screens/Dashboard';
import accountselector from '../screens/accountselector';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();

const SplashNavigator = () => {
    return (

       <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Signup" component={Signup}/>
           <Stack.Screen name="Signupm" component={Signupm}/>
           <Stack.Screen name="Dashboard" component={Dashboard}/>
           <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
           <Stack.Screen name="accountselector" component={accountselector}/>
       </Stack.Navigator>
    )
}

export default SplashNavigator
