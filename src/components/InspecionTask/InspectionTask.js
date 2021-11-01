import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import Button from '../Button/Button';


export default function InspectionTask(props) {
    const [read, setRead] = useState()
    function handleMarkDone(){
        console.log('Done');
    }
    return (
        <View style={styles.notificationBox}>
            <View style={styles.col}>
                <View style={styles.row1}>
                <Icon name="cog" size={40} color={colors.darker_teal} />
                <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.description}>Date: {props.date}</Text>
                    <View style={[styles.tag,{backgroundColor:props.status==="Done"? colors.green:colors.gold}]}>
                        <Text>{props.status}</Text>
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