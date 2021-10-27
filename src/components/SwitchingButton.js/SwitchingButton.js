import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {colors} from '../../constants/palette'

export default function SwitchingButton(props) {
    return (
    <View style={styles.buttonView}>
        <TouchableOpacity 
        style={[styles.button,styles.leftBtn, {backgroundColor: props.current===1?"#008080":"#009494"}]}
        disabled={props.current===1?true:false}
        onPress={()=>{props.nav.navigate('Attendance Record')}}>
            <Text style={styles.btntext} >Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, styles.rightBtn, {backgroundColor: props.current===2?"#008080":"#009494"}]}
        disabled={props.current===2?true:false}
        onPress={()=>{props.nav.navigate('Leaves Record')}}>
            <Text style={styles.btntext}>Leaves</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        width:'50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        elevation: 4,
        marginTop : 15
    },
    leftBtn:{
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15
    },
    rightBtn:{
        borderTopRightRadius:15,
        borderBottomRightRadius:15
    },
    btntext :{
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '500',
        letterSpacing: 0.25,
        color: colors.text_light,
    },
})