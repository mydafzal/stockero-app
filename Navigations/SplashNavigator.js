import React from 'react'
import { View, Text } from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Signupm from '../screens/Signupm';
import ForgetPassword from '../screens/ForgetPassword';
import NewPassword from '../screens/NewPassword';
import Dashboard from '../screens/Dashboard';
import accountselector from '../screens/accountselector';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SplashNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Signup"
                component={Signup} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Signupm"
                component={Signupm} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Dashboard"
                component={Dashboard} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ForgetPassword"
                component={ForgetPassword} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="NewPassword"
                component={NewPassword} />
            <Stack.Screen options={{ headerShown: false }}
                name="accountselector"
                component={accountselector} />
        </Stack.Navigator>
    )
}

export default SplashNavigator
