import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {colors, shadows} from '../../constants/palette'

export default function (props) {
    return (
    <View>            
        <TouchableOpacity style={styles.fullWidthButton} onPress={props.callback}>
            <Text style={styles.fullWidthButtonText}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    fullWidthButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: colors.teal,
        elevation: shadows.md.y,
        shadowColor: shadows.md.color,
        shadowOpacity: shadows.md.opacity,
        shadowOffset: { width: shadows.md.x, height: shadows.md.y },
        paddingHorizontal: 12,
        height: 48
    },

    fullWidthButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.white,
    },

    reversedButton: {
        backgroundColor:
            colors.white,
        color: colors.black,
    },

    reversedButtonText: {
        color: colors.black,
    },

    disabledButton: {
        opacity: 0.66,
    },

    indicator: {
        color: colors.white,
    },

    indicatorReversed: {
        color: colors.black,
    }
});
