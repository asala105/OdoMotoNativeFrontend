import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { colors } from '../../constants/palette';
import MyCalendar from '../../components/Calendar/Calendar';
import SwitchingButton from '../../components/SwitchingButton.js/SwitchingButton'
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import api from '../../api';

export default function AttendanceScreen({navigation}) {
    const [registeredDisabled, setRegisteredDisabled] = useState(false);
    const [finalizeDisabled, setFinalizeDisabled] = useState(false);
    function handleRegister(){
        api.RegisterAttendance(id)
        .then(response => {
            console.log(response.data);
            setRegisteredDisabled(true);
        })
        .catch(error => {
            console.log(error);
        });
    }
    function handleFinalize(){
        api.FinalizeAttendance(id)
        .then(response => {
            console.log(response.data);
            setFinalizeDisabled(true);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
    <View style={styles.container}>
        <Header title="Attendance"/>
        <SwitchingButton nav={navigation} current={1}/>
        <View style={{marginTop:-30}}>
            <MyCalendar/>
        </View>
        <View style={styles.row}>
            <Button text="Register Attendance" callback={handleRegister} disabled={registeredDisabled}/>
            <Button text="Finalize Attendance" callback={handleFinalize} disabled={finalizeDisabled}/>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card_background,
    },
    text:{
        fontSize: 18,
        marginVertical:15,
    },
    col:{
        alignItems: 'flex-start',
    },
    notificationBox: {
        marginHorizontal: 10,
        padding:20,
        marginTop:50,
        marginBottom:5,
        backgroundColor: colors.background,
        flexDirection: 'column',
        borderRadius:10,
        opacity : 0.9
    },
    title:{
        color: colors.text_dark,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop:5,
        marginBottom:5,
        fontSize:20,
    },
    row:{
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: '20%',
        borderRadius: 15,
        elevation: 4,
        backgroundColor: colors.teal,
        marginTop : 15,
        
    },
    btntext :{
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: colors.text_light,
    },
    time: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: '5%',
        elevation: 4,
        backgroundColor: colors.teal,
        marginTop : 15,
        fontSize: 15,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: colors.text_light,
    },
})

