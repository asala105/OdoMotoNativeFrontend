import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import LeaveRequestForm from '../../components/LeaveRequest/LeaveRequestForm';
import { colors } from '../../constants/palette';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import MyCalendar from '../../components/Calendar/Calendar';
import SwitchingButton from '../../components/SwitchingButton.js/SwitchingButton'
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ExtractMarkedDates from './LeavesFunctions';
import api from '../../api';

export default function LeavesScreen({navigation}) {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState();
    const modalizeRef = useRef(null);
    const [dates, setDates] = useState({});
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };
    function getLeavesData(){
        api.GetLeavesData()
        .then(response => {
            console.log(response.data);
            setDates(ExtractMarkedDates(response.data.leaves));
        })
        .catch(error => {
            console.log(error);
        });
    }
    useEffect(() =>{
        getLeavesData();
    },[])
    return (
        <View style={styles.container}>
            <Header title="Leaves"/>
            <View style={{padding:10}}>
            <SwitchingButton nav={navigation} current={2}/>
            <View style={{marginTop:-30}}>
                <MyCalendar marked={dates}/>
            </View>
            <View>
                <Portal>
                    <Modalize ref={modalizeRef} style={{ backgroundColor: colors.card_background}}>
                    <View style={{margin:15}}>
                        <View style={{ padding: 20, flexDirection:'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={styles.title}>Request A Leave</Text>
                            </View> 
                        </View>
                        <View>
                        <LeaveRequestForm callback={onClose}/>
                        </View>
                        </View>
                    </Modalize>
                </Portal>
                <Button text="Request A Leave" callback={onOpen}/>
            </View>
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
});