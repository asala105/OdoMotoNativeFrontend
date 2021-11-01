import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InspectionScreen from '../screens/InspectionScreen/InspectionScreen';
import React, { useState, useRef} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/palette';
import { Host } from 'react-native-portalize';
import AttendanceNav from './AttendanceNav';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
  const navigationRef = useRef(null);
  const [userType, setUserType] = useState(3);
  return (
<NavigationContainer
ref = {navigationRef}
>
  <Host>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor= {colors.card_background}
      inactiveColor={colors.darker_teal}
      barStyle={{ backgroundColor: colors.teal,}}
      >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerShown : true
        }}/>
      <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
      }}/>
      {userType===3?<>
        <Tab.Screen name="Attendance" component={AttendanceNav} 
        options={{
          tabBarLabel: 'Attendance',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-month-outline" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Inspection" component={InspectionScreen} 
        options={{
          tabBarLabel: 'Inspection',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car-cog" color={color} size={26} />
          ),
        }}/></>
      :<></>}
      <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
      }}/>
    </Tab.Navigator>
  </Host>
</NavigationContainer>
  );
}

export default BottomNav;