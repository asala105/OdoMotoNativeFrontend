import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../api';
import { colors } from "../../constants/palette";
import {updateUserProfile} from '../../redux/slices/userSlice';
import { store } from '../../redux/store';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

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
        store.dispatch(updateUserProfile({ userProfile: {
          first_login: 0,
      }}));
      console.log(response);
      navigation.replace('Home Screen');
    })
    .catch((error) => {
      console.error(error);
    }); 
  };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Bottom view */}
        <Header title="Change Password on first login"/>
        <View style={{ backgroundColor: colors.card_background}}>
            {/* Welcome View */}
            <View style={{padding:20, marginHorizontal:5}}>
                <View style = {{ paddingVertical: 10 }}>
                  <View style={{ marginVertical:5 }}>
                    <Text style={styles.formLabel}><Icon name="lock" style={{ fontSize: 16 }} /> Password:</Text>
                    <TextInput  placeholder=' New password here...' style={styles.inputs}
                    onChangeText={(value)=>setPassword(value)}></TextInput>
                  </View>
                  <View style={{ marginVertical:5 }}>
                    <Text style={styles.formLabel}><Icon name="lock" style={{ fontSize: 16 }} /> Confirm Password:</Text>
                    <TextInput  placeholder=' Confirm password...' style={styles.inputs}
                    onChangeText={(value) => setConfirmPassword(value)}></TextInput>
                </View>
                </View>
                <Button text="Reset Password" callback={handlePasswordReset}/>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.card_background,
  },
  text:{
      fontSize: 18,
      marginVertical:15,
      color: colors.text
  },
  col:{
      alignItems: 'flex-start',
  },
inputs: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor : 'white',
    borderRadius : 7,
    borderWidth : 1,
    width: '100%'
},
row:{
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
},
formLabel:{
    color: colors.text,
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom:10
},
});