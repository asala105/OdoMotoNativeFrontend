import React, {useState} from 'react'
import {View, StyleSheet, Text, Dimensions, TextInput, Platform} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function FuelOdometerForm() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };
    
    function handleSend(){
        console.log('send');
    }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Before Trip</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Odometer:</Text>
        <TextInput  placeholder=' Enter the odometer record in km' style={styles.inputs}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Fuel Level:</Text>
        <TextInput  placeholder=' Enter the fuel level in %' keyboardType='email-address' style={styles.inputs}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> After Trip</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Odometer:</Text>
        <TextInput  placeholder=' Enter the odometer record in km' style={styles.inputs}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Fuel Level:</Text>
        <TextInput  placeholder=' Enter the fuel level in %' keyboardType='email-address' style={styles.inputs}></TextInput>
      </View>
      <Button text="Save" callback={handleSend}/>   
    </View>
  )
}
      const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.card_background,
        },
        inputs: {
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor : 'white',
            borderRadius : 7,
            borderWidth : 1,
            width: '70%'
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
        button:{
            backgroundColor: colors.darker_teal,
            width:'20%',
        }
    });