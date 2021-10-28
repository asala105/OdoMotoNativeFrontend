import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Platform} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import DestinationsForm from '../DestinationsForm/DestinationsForm';

export default function MovementPlanForm() {
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
                <Text style={styles.formLabel}> Date:</Text>
                <Text style={styles.inputs} onPress={showDatepicker}>
                {date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> Start Time:</Text>
                <Text style={styles.inputs} onPress={showTimepicker}>
                {date.getHours() + ':' + date.getMinutes()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> End Time:</Text>
                <Text style={styles.inputs} onPress={showTimepicker}>
                {date.getHours() + ':' + date.getMinutes()}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> Purpose:</Text>
                <TextInput  placeholder=' Enter the purpose of the trip here' style={styles.inputs}></TextInput>
            </View>
            
            <DestinationsForm/>
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