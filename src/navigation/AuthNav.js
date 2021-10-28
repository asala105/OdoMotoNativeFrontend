import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassScreen/ResetPasswordScreen';
import { colors } from '../constants/palette';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:colors.text},headerTintColor:{color:colors.text_light}}}>
                <Stack.Screen name = "Login" component = {LoginScreen} options={{headerShown : true}} />
                <Stack.Screen name = "Reset Password" component = {ResetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNav;