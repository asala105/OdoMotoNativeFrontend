import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassScreen/ResetPasswordScreen';
import { colors } from '../constants/palette';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    const navigationRef = useRef(null);
    return (
        <NavigationContainer
        ref={navigationRef}>
            <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:colors.teal, color:colors.darker_teal}}}>
                <Stack.Screen name = "Login" component = {LoginScreen} options={{headerShown : false}} />
                <Stack.Screen name = "Reset Password" component = {ResetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNav;