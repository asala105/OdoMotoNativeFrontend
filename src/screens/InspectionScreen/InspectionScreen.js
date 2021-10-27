import React, {useState} from 'react'
import {View, TouchableOpacity, StyleSheet, Text, Modal} from 'react-native'
import Header from '../../components/Header/Header';
import InspectionForm from '../../components/InspectionForm/InspectionForm';
import LeaveRequestForm from '../../components/LeaveRequest/LeaveRequestForm';
import { colors } from '../../constants/palette';

export default function InspectionScreen() {
    const [visible, setVisible] = useState(false);
    return (
    <View style={styles.container}>
        <Header title="Inspection"/>
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