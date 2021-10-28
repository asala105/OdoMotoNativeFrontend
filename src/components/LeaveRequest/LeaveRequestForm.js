import DatePicker from 'react-native-datepicker'
import React, {useState} from 'react'
import {View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';


export default function LeaveRequestForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  
  function handleSend(){
    console.log('send');
  }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Starting from</Text>
        <DatePicker
          style={{width: "65%"}}
          date={startDate}
          mode="date"
          placeholder="starting date"
          format="YYYY-MM-DD"
          minDate={startDate}
          maxDate={startDate.getDate() + 10}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Till</Text>
        <DatePicker
          style={{width: "65%"}}
          date={endDate}
          mode="date"
          placeholder="ending date"
          format="YYYY-MM-DD"
          minDate={endDate}
          maxDate={endDate.getDate() + 10}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Leave Type</Text>
        <TextInput  placeholder=' Enter the leave type here' keyboardType='email-address' style={styles.inputs}></TextInput>
      </View>
      <Button text="Send Request" callback={handleSend}/>      
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
