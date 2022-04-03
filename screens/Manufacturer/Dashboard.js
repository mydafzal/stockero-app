import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import Icon, { Icons } from '../../constants/Icons';
import Colors from '../../constants/Colors';
import Home from '../Manufacturer/Home';
import BuyerRequests from '../Manufacturer/BuyerRequests';
import Orders from '../Manufacturer/Orders';
import Notifications from '../Manufacturer/Notifications';
import Profile from '../Manufacturer/Profile';
import * as Animatable from 'react-native-animatable';


const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.FontAwesome, icon: 'home', component: Home, color: '#4F3074', alphaClr: '#FFFFFF' },
  { route: 'Buyer Requests', label: 'Buyer Requests', type: Icons.Ionicons, icon: 'podium', component: BuyerRequests, color: '#4F3074', alphaClr: '#FFFFFF' },
  { route: 'Orders', label: 'Orders', type: Icons.FontAwesome5, icon: 'clipboard-list', component: Orders, color: '#4F3074', alphaClr: '#FFFFFF' },
  { route: 'Notifications', label: 'Notifications', type: Icons.FontAwesome, icon: 'bell', component: Notifications, color: '#4F3074', alphaClr: '#FFFFFF' },
  { route: 'Profile', label: 'Settings', type: Icons.FontAwesome, icon: 'gear', component: Profile, color: '#4F3074', alphaClr: '#FFFFFF' },
];

const Tab = createBottomTabNavigator();
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.60 }]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 10 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
          <Icon type={item.type} name={item.icon} color={focused ? 'white': Colors.gray} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: 'white', paddingHorizontal: 8
            }}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  }
})