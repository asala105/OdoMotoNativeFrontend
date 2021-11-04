import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Platform} from 'react-native'
import { colors } from '../../constants/palette';
import Button from '../Button/Button';

export default function DestinationsForm() {
    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> From:</Text>
                <TextInput  placeholder=' From location...' keyboardType="default" style={styles.inputs}></TextInput>
            </View>
            <View style={styles.row}>
                <Text style={styles.formLabel}> To:</Text>
                <TextInput  placeholder=' To Location...' keyboardType="default" style={styles.inputs}></TextInput>
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