import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LeavesScreen from '../screens/LeavesScreen/LeavesScreen';
import AttendanceScreen from '../screens/AttendanceScreen/AttendanceScreen';
import { colors } from '../constants/palette';

const Stack = createNativeStackNavigator();

const AttendanceNav = () => {
    return (
        <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:colors.teal},headerTintColor:{color:colors.darker_teal}}}>
            <Stack.Screen name = "Attendance Record" component = {AttendanceScreen} options={{headerShown : false}} />
            <Stack.Screen name = "Leaves Record" component = {LeavesScreen} options={{headerShown : false}}/>
        </Stack.Navigator>
    );
}

export default AttendanceNav;