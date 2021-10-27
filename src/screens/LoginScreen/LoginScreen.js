import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "../../constants/palette";
import Logo from '../../components/Logo';

export default function Login({navigation}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const handleLogin = () => {
    setErrortext('');
    if ((!userEmail) || (!userPassword)) {
      setErrortext('Both email and password are required');
      return;
    }
    let dataToSend = {email: userEmail, password: userPassword};
    console.log(dataToSend);
    api.login(dataToSend, { headers: { 'Accept': "application/json", 'content-type': "application/json", 'Access-Control-Allow-Origin': '*' } })
    .then(response => {
      // If server response message same as Data Matched
      if (response.status === 200) {
        AsyncStorage.setItem('access_token', response.data.access_token);
        console.log(response.data);
        // if (response.data.user.first_login){
        //   api.registerExpoToken().then(response => {
        //     console.log('token registered successfully');
        //   }).catch(error => {
        //     console.log('an error occurred');
        //   });
          navigation.replace('Reset Password');
        // }else{
        // navigation.replace('Home Screen');
        // }
      } else {
        setErrortext('Please check your email and password');
      }
    })
    .catch((error) => {
      setErrortext('Please check your email and password');
      console.error(response);
    }); 
  };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('../../pictures/bg3.png')}
                style={styles.image}>
            </ImageBackground>
        <View style={{ marginTop: -170 }} >
            {/* <Image source={require('../../pictures/logoIcon.png')} style={styles.icon}/> */}
        <Logo style={styles.icon}/>
        </View>
        {/* Bottom view */}
        <View style={styles.bottomView}>
            {/* Welcome View */}
            <View style={{ padding: 20, height : 420}}>
                <Text style={{ color: colors.text, fontSize: 24,fontWeight:'bold' }}>Welcome</Text>
                <Text>Forgot your password?
                <TouchableOpacity onPress ={()=>navigation.navigate("Reset Password")}>
                    <Text style={{ color: colors.text, fontStyle: 'italic' }}>  Reset Here</Text>
                </TouchableOpacity>
                </Text>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal',marginBottom:10 }}> <Icon name="user" style={{ fontSize: 16 }} />  Email address</Text>
                    <TextInput  placeholder=' Enter your email address' keyboardType='email-address' style={styles.inputs} onChangeText={(email)=>{setUserEmail(email)}}></TextInput>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:5 }}> <Icon name="lock" style={{ fontSize: 16 }} />  Password</Text>
                    <TextInput placeholder=' Enter your password' keyboardType='email-address' secureTextEntry={true} style={styles.inputs} onChangeText={(pass)=>{setUserPassword(pass)}}></TextInput>
                </View>
                {/* error message */}
                <View>            
                  <Text style={styles.errorTextStyle}>{errortext}</Text>
                </View>
                {/* Button */}
                <View style={styles.buttonView}>            
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    height: 110,
    width: 170,
    opacity: 1,
    marginTop: -30,
    justifyContent: 'center', 
		alignSelf: 'center'
  },

  bottomView: {
    flex: 1.5,
    backgroundColor: colors.background,
    bottom: 0,
    marginTop: 20,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignSelf:'stretch',
    height:'100%',
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