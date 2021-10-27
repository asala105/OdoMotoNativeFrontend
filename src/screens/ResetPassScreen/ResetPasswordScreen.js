import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "../../constants/palette";
import { color } from 'react-native-reanimated';
import Logo from '../../components/Logo'

export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const handlePasswordReset = () => {
    setErrorText('');
    if ((!password) || (!confirmPassword)) {
      setErrorText('Both password and confirm password fields are required');
      return;
    }
    let dataToSend = {password: password, confirm_pass: confirmPassword};
    api.resetPass(dataToSend)
    .then(response => {
      // If server response message same as Data Matched
      if (response.status === 200) {
        navigation.replace('Home Screen');
      } else {
        setErrorText('password and confirm password should match');
      }
    })
    .catch((error) => {
      setErrorText('sorry an error occurred, please try again');
      console.error(error);
    }); 
  };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Bottom view */}
        <View style={styles.bottomView}>
            {/* Welcome View */}
            <View style={{ padding: 20, height : 420}}>
                <Text style={{ color: colors.text, fontSize: 24,fontWeight:'bold' }}>New Password</Text>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal',marginBottom:10 }}> <Icon name="lock" style={{ fontSize: 16 }} />  Password</Text>
                    <TextInput  placeholder=' Enter the new password' keyboardType='email-address' style={styles.inputs} onChangeText={(password)=>{setPassword(password)}}></TextInput>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:5 }}> <Icon name="lock" style={{ fontSize: 16 }} />  Confirm Password</Text>
                    <TextInput placeholder=' Retype the new password' keyboardType='email-address' secureTextEntry={true} style={styles.inputs} onChangeText={(confirmPass)=>{setConfirmPassword(confirmPass)}}></TextInput>
                </View>
                {/* error message */}
                <View>            
                  <Text style={styles.errorTextStyle}>{errorText}</Text>
                </View>
                {/* Button */}
                <View style={styles.buttonView}>            
                    <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    height: Dimensions.get('window').height / 2.5,
    marginTop: 0,
    opacity: 0.4

  },
  icon: {
    height: 95,
    width: 149,
    opacity: 1,
    marginTop: -10,
    justifyContent: 'center', 
		alignSelf: 'center'
  },

  bottomView: {
    flex: 1.5,
    backgroundColor: colors.background,
    bottom: 0,
    marginTop: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignSelf:'stretch',
    height:'700',
  },

  buttonView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor : 'white',
    borderRadius : 7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 122,
    borderRadius: 50,
    elevation: 4,
    backgroundColor: colors.text,
    marginTop : 15
  },
  btntext :{
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.text_light,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});