import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../../constants/palette'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.teal,
        padding: 30,
        height: 70,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.darker_teal
    }
})