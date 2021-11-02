import React, {useState} from 'react'
import {View, StyleSheet, Text, Dimensions, TextInput, Platform} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../api';

export default function FuelOdometerForm(props) {
  const [odometerBefore, setOdometerBefore] = useState('');
  const [odometerAfter, setOdometerAfter] = useState('');
  const [fuelBefore, setFuelBefore] = useState('');
  const [fuelAfter, setFuelAfter] = useState('');

    function handleSend(){
      let dataToSend = {
        odometer_before_trip: odometerBefore,
        odometer_after_trip: odometerAfter,
        fuel_before_trip: fuelBefore,
        fuel_after_trip: fuelAfter,
      };
      api.AddFuelOdomoter(dataToSend, props.fleet, props.vehicle)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
          console.log(error);
      });
    }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Before Trip</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Odometer:</Text>
        <TextInput  placeholder=' Enter the odometer record in km' style={styles.inputs}
        onChangeText={(value) =>setOdometerBefore(value)}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Fuel Level:</Text>
        <TextInput  placeholder=' Enter the fuel level in %' keyboardType='email-address' style={styles.inputs}
        onChangeText={(value) =>setFuelBefore(value)}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> After Trip</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Odometer:</Text>
        <TextInput  placeholder=' Enter the odometer record in km' style={styles.inputs}
        onChangeText={(value) =>setOdometerAfter(value)}></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Fuel Level:</Text>
        <TextInput  placeholder=' Enter the fuel level in %' keyboardType='email-address' style={styles.inputs}
        onChangeText={(value) =>setFuelAfter(value)}></TextInput>
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