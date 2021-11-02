import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Platform} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import DestinationsForm from '../DestinationsForm/DestinationsForm';
import api from '../../api';

export default function MovementPlanForm() {
    const [date, setDate] = useState(new Date());
    const [dateTime, setDateTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [isStart, setIsStart] = useState(false);
    const [purpose, setPurpose] = useState('');
    const [locationFrom, setLocationFrom] = useState('');
    const [locationTo, setLocationTo] = useState('');

    function AddDestinationForm(){
        console.log('AddDestinationForm');
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDateTime(currentDate);
        if(mode==='time' && isStart){
            setStart(currentDate);
        }
        if(mode==='time' && isStart===false){
            setEnd(currentDate);
        }
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

    const getdate = (dateItem)=>{
        let year = dateItem.getFullYear();
        let month = ('0'+(dateItem.getMonth()+1)).slice(-2);
        let day = ('0'+(dateItem.getDate()+1)).slice(-2);
        return year + "-" + month + "-" + day;
      }

      const gettime = (dateItem)=>{
        let hours = ('0'+(dateItem.getHours()+1)).slice(-2);
        let minutes = ('0'+(dateItem.getMinutes()+1)).slice(-2);
        return hours+":" + minutes;
      }
    function handleSend(){
        if (purpose===''){
            console.log('all fields required!');
        }else{
            let dataToSend = {
                date: getdate(date),
                start_time: gettime(start),
                end_time: gettime(end),
                purpose: purpose
            };
          console.log(dataToSend);
          api.SendFleetRequest(dataToSend)
          .then(response => {
            console.log(response.data);
            let destinationData = {
                location_from: locationFrom,
                location_to: locationTo,
            }
            api.AddDestination(destinationData,response.data.Fleet.id)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
          })
          .catch(error => {
              console.log(error);
          });
        }
        }
    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> Date:</Text>
                <Text style={styles.inputs} onPress={showDatepicker}>
                {dateTime.getFullYear() + '-' + dateTime.getMonth() + '-' + dateTime.getDate()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> Start Time:</Text>
                <Text style={styles.inputs} onPress={()=>{showTimepicker(); setIsStart(true);}}>
                {start.getHours() + ':' + start.getMinutes()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> End Time:</Text>
                <Text style={styles.inputs} onPress={()=>{showTimepicker(); setIsStart(false);}}>
                {end.getHours() + ':' + end.getMinutes()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> Purpose:</Text>
                <TextInput  placeholder=' Enter the purpose of the trip here' style={styles.inputs}
                onChangeText={(value)=>{setPurpose(value)}}></TextInput>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> From:</Text>
                <TextInput  placeholder=' From location...' style={styles.inputs} onChangeText={(value)=>{setLocationFrom(value)}}></TextInput>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> To:</Text>
                <TextInput  placeholder=' To Location...' style={styles.inputs} onChangeText={(value)=>{setLocationTo(value)}}></TextInput>
            </View>
            <View style={{ marginVertical:10 }}>
            <Button text="Send Request" callback={handleSend}/> 
            </View>
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