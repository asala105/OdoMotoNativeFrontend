import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';


export default function Notification(props) {
    const [read, setRead] = useState()
    console.log(props.title);
    return (
        <View style={styles.notificationBox}>
            {props.type === 'Accept' ? 
                <Icon name="check-circle" size={40} color={colors.green} />
                : props.type==='Reject'?
                <Icon name="times-circle" size={40} color={colors.red} />:
                <Icon name="bell" size={40} color={colors.teal} />}
            <View style={styles.col}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.body}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    col:{
        alignItems: 'center',
    },
    title:{
        color: colors.text_dark,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop:5,
        marginBottom:5,
        fontSize:20,
        marginLeft:10,
    },
    notificationBox: {
        padding:20,
        marginTop:5,
        marginBottom:5,
        backgroundColor: colors.card_background,
        flexDirection: 'row',
        borderRadius:10,
        opacity : 0.9,
        alignItems: 'center'
    },
    icon:{
      width:45,
      height:45,
      color: colors.text,
    },
    description:{
      fontSize:13,
      color: colors.text,
      marginLeft:10,
    },
  });