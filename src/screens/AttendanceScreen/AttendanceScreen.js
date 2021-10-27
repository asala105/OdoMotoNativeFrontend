import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Header from '../../components/Header/Header'
import { colors } from '../../constants/palette'
import SwitchingButton from '../../components/SwitchingButton.js/SwitchingButton'

export default function AttendanceScreen({navigation}) {
    return (
    <View style={styles.container}>
        <Header title="Attendance"/>
        <SwitchingButton nav={navigation} current={1}/>
        <Text>Attendance Screen</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card_background,
    },
})

