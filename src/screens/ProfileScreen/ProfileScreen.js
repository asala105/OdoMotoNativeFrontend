import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../api';
import {deleteToken} from '../../redux/slices/tokenSlice';
import {deleteUser} from '../../redux/slices/userSlice';
import { store } from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

let user = {
    date_of_birth: "1997-09-01",
    department: "Logistics",
    email: "user@mail.com",
    first_name: "John",
    last_name: "Doe",
    manager: "Mark Morris",
    phone_nb: "+961237374",
    rank: 3
}

export default function ProfileScreen() {
    const user = useSelector((state) => state?.user);
    function handleLogout(){
        api.Logout()
        .then(response => {
            console.log(response.data);
            store.dispatch(deleteToken());
            store.dispatch(deleteUser());
            AsyncStorage.clear();
        })
        .catch(error => {
            console.log(error);
        });
    }
    useEffect(() => {})
    return (
        <View>
            <Header title="Profile"/>
            <View style={styles.notificationBox}>
                <View style={styles.col1}>
                    <Icon name="user-circle" size={55} color={colors.darker_teal} />
                    <Text style={styles.title}>{user.userProfile.first_name + ' ' + user.userProfile.last_name}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.text}><Icon name="envelope" size={20} color={colors.darker_teal} /> Email</Text>
                        <Text style={styles.text}><Icon name="phone" size={20} color={colors.darker_teal} /> Phone Number</Text>
                        <Text style={styles.text}><Icon name="calendar" size={20} color={colors.darker_teal} /> Date of Birth</Text>
                        <Text style={styles.text}><Icon name="building" size={20} color={colors.darker_teal} /> Department</Text>
                        <Text style={styles.text}><Icon name="user" size={20} color={colors.darker_teal}/> Manager</Text>
                        <Text style={styles.text}><Icon name="level-up" size={20} color={colors.darker_teal} /> Rank</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.text}> {user.userProfile.email}</Text>
                        <Text style={styles.text}> {user.userProfile.phone_nb}</Text>
                        <Text style={styles.text}> {user.userProfile.date_of_birth}</Text>
                        <Text style={styles.text}> {user.userProfile.department}</Text>
                        <Text style={styles.text}> {user.userProfile.manager}</Text>
                        <Text style={styles.text}> {user.userProfile.rank}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={[styles.text, colors.text]}><MaterialCommunityIcons name="logout" size={30} color={colors.darker_teal} /> Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    col1:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    notificationBox: {
        marginHorizontal: 5,
        padding:20,
        marginTop:20,
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
        margin:5,
        fontSize:20,
    },
    row1:{
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
