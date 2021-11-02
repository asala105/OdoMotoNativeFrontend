import React, {useState} from 'react'
import {View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../api';

export default function LeaveRequestForm() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [from, setFrom] = useState(new Date());
  const [till, setTill] = useState(new Date());
  const [isStart, setIsStart] = useState(true);
  const [type, setType] = useState(true);

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      if (isStart){
        setFrom(currentDate);
      }
      if (isStart===false){
          setTill(currentDate);
      }
  };

  const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
  };

  const showDatepicker = () => {
      showMode('date');
  };

  const getdate = (dateItem)=>{
    let year = dateItem.getFullYear();
    let month = ('0'+(dateItem.getMonth()+1)).slice(-2);
    let day = ('0'+(dateItem.getDate()+1)).slice(-2);
    return year + "-" + month + "-" + day;
  }
  function handleSend(){
    if (type===''){
      console.log('all fields required!');
    }
    else{
      let dataToSend = {
        leave_from_date: getdate(from),
        leave_till_date: getdate(till),
        leave_type: type,
      };
      console.log(dataToSend);
      api.RequestLeave(dataToSend)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Starting from</Text>
        <Text style={styles.inputs} onPress={()=>{showDatepicker(); setIsStart(true);}}>
                {from.getFullYear() + '-' + from.getMonth() + '-' + from.getDate()}
                </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Till</Text>
        <Text style={styles.inputs} onPress={()=>{showDatepicker(); setIsStart(false);}}>
                {till.getFullYear() + '-' + till.getMonth() + '-' + till.getDate()}
                </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.formLabel}> Leave Type</Text>
        <TextInput  placeholder=' Enter the leave type here' keyboardType='email-address' style={styles.inputs} onChangeText={(value)=>{setType(value);}}></TextInput>
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
