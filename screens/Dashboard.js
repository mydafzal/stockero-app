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
import Icon, { Icons } from '../constants/Icons';
import Colors from '../constants/Colors';
import Home from '../screens/Home';
import Inbox from '../screens/Inbox';
import Orders from '../screens/Orders';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import * as Animatable from 'react-native-animatable';


const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.FontAwesome, icon: 'home', component: Home, color: Colors.primaryLite, alphaClr: '#FFFFFF' },
  { route: 'Inbox', label: 'Inbox', type: Icons.Ionicons, icon: 'chatbox-ellipses', component: Inbox, color: Colors.primaryLite, alphaClr: '#FFFFFF' },
  { route: 'Orders', label: 'Orders', type: Icons.FontAwesome5, icon: 'clipboard-list', component: Orders, color: Colors.primaryLite, alphaClr: '#FFFFFF' },
  { route: 'Notifications', label: 'Notifications', type: Icons.FontAwesome, icon: 'bell', component: Notifications, color: Colors.primaryLite, alphaClr: '#FFFFFF' },
  { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, icon: 'user', component: Profile, color: Colors.primaryLite, alphaClr: '#FFFFFF' },
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
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 10 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
          <Icon type={item.type} name={item.icon} color={focused ? Colors.primary : Colors.gray} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: Colors.primary, paddingHorizontal: 8
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