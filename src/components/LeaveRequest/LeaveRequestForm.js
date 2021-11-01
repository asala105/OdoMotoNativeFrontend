import React, {useState} from 'react'
import {View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LeaveRequestForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  function AddDestinationForm(){
      console.log('AddDestinationForm');
  }
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
        <Text style={styles.formLabel}> Starting from</Text>
        <Text style={styles.inputs} onPress={showDatepicker}>
                {date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}
                </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Till</Text>
        <Text style={styles.inputs} onPress={showDatepicker}>
                {date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}
                </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Leave Type</Text>
        <TextInput  placeholder=' Enter the leave type here' keyboardType='email-address' style={styles.inputs}></TextInput>
      </View>
      <Button text="Send Request" callback={handleSend}/>      
    
    <View>
    {show ?
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
        />:null}
    </View> 
    </View>
  )
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
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor : 'white',
      borderRadius : 7,
      borderWidth : 1,
      width: '65%'
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
    row:{
      marginTop:5,
      marginBottom:5,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  formLabel:{
    color: colors.text,
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom:10
  }
  });
