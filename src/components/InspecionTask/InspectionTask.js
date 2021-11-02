import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import Button from '../Button/Button';
import api from '../../api';


export default function InspectionTask(props) {
    const [done, setDone] = useState(props.status);
    function handleMarkDone(){
        console.log('Done');
        api.MarkInspectionTaskDone(props.id)
        .then(response => {
            console.log(response.data);
            setDone(6);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <View style={styles.notificationBox}>
            <View style={styles.col}>
                <View style={styles.row1}>
                <Icon name="cog" size={40} color={colors.darker_teal} />
                <Text style={styles.title}>{props.title===0? "Maintenance":"Safety Inpection"}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.description}>Date: {props.date}</Text>
                    <View style={[styles.tag,{backgroundColor:done===6? colors.green:colors.gold}]}>
                        <Text>{done===6?"Done":"In Progress"}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop:10 }}>
                <Button text="Mark Done" callback={handleMarkDone}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    col:{
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    row1:{
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    row2:{
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    tag:{
        fontSize:10,
        padding:3,
        borderRadius:5,
        minWidth:10,
        alignItems: 'center',
    },
    title:{
        color: colors.text_dark,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
    },
    notificationBox: {
        padding:20,
        marginTop:5,
        marginBottom:5,
        backgroundColor: colors.background,
        flexDirection: 'column',
        borderRadius:10,
        opacity : 0.9,
        alignItems: 'stretch'
    },
    icon:{
      width:45,
      height:45,
      color: colors.text,
    },
    description:{
      fontSize:13,
      color: colors.text,
    },
  });