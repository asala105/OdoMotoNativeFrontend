import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { colors } from '../../constants/palette';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import MyCalendar from '../../components/Calendar/Calendar';
import Header from '../../components/Header/Header';
import InspectionTask from '../../components/InspecionTask/InspectionTask';
import api from '../../api';

const tasks = [
    {title:'Safety Check', date:'2021-10-28', status:'In progress'},
    {title:'Maintenance', date:'2021-10-28', status:'Done'},
    {title:'Safety Check', date:'2021-10-28', status:'In progress'}
]

export default function InspectionScreen({navigation}) {
    const [data, setData] = useState();

    function getTasks(date){
        console.log(date);
        api.GetInspectionTask(date)
        .then(response => {
            console.log(response.data);
            setData(response.data.inspectionTasks);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <Header title="Inspection Schedule"/>
        <View style={{marginTop:-30}} >
            <MyCalendar callback={getTasks}/>
        </View>
        <View>
        <FlatList
                data={data}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <InspectionTask id={item.id} title={item.inspection_type} date={item.date} status={item.status_id}/>
                    )
                }} /> 
        </View>
    </ScrollView>
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
    borderRadius: 10,
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