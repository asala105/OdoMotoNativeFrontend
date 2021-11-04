import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import ResetPasswordScreen from '../screens/ResetPassScreen/ResetPasswordScreen';
import { colors } from '../constants/palette';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
    const navigationRef = useRef(null);
    const user = useSelector((state) => state?.user);
    
    return (
            <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:colors.teal, color:colors.darker_teal}}}>
                {user?.userProfile?.first_login===1?
                <Stack.Screen name = "Reset Password" component = {ResetPasswordScreen} options={{headerShown : false}}/>:
                <Stack.Screen name = "Home Screen" component = {HomeScreen} options={{headerShown : false}} />
                }   
            </Stack.Navigator>
    );
}

export default HomeNav;