import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AttendanceScreen from '../screens/AttendanceScreen/AttendanceScreen';
import InspectionScreen from '../screens/InspectionScreen/InspectionScreen';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/palette';
import LeavesScreen from '../screens/LeavesScreen/LeavesScreen';
const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
  return (
<NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor= {colors.card_background}
      inactiveColor={colors.darker_teal}
      barStyle={{ backgroundColor: colors.teal }}>
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
      <Tab.Screen name="Attendance" component={LeavesScreen} 
              options={{
                tabBarLabel: 'Attendance',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="calendar-month-outline" color={color} size={26} />
                ),
              }}
        />
      <Tab.Screen name="Inspection" component={InspectionScreen} 
              options={{
                tabBarLabel: 'Inspection',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="car-cog" color={color} size={26} />
                ),
              }}/>
                    <Tab.Screen name="Log out" component={InspectionScreen} 
              options={{
                tabBarLabel: 'Logout',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="logout" color={color} size={26} />
                ),
              }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNav;