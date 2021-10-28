import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';
import Notification from '../../components/Notification/Notification';
import { colors } from "../../constants/palette";
//import api from '../api';

let notifications = [
  {id:'1',title:'Attendance',body:'reaquest approved', type:'accept' },
  {id:'1',title:'Attendance',body:'reaquest approved', type:'reject'},
  {id:'1',title:'Attendance',body:'reaquest approved', type:'info'},
]
export default function Notifications() {

//   const [notifications, setNotifications] = useState('');
//   const allNotifications = ()=>{
//     api.getNotifications()
//         .then(response => {
//             setNotifications(response.data);
//         })
//         .catch(error => {
//             console.log('Error');
//         });
// }
// useEffect(() => {
//   allNotifications();
// }, []);

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <Header title="Notifications"/>
            <FlatList
                style={styles.notificationList}
                data={notifications}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                      <Notification title={item.title} body={item.body} type={item.type}/>
                    )
                }} />
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.background
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#8C0C33',
      flexDirection: 'row',
      borderRadius:10,
      opacity : 0.9
    },
    icon:{
      width:45,
      height:45,
      color: colors.text,
    },
    description:{
      fontSize:13,
      color: "#F9DEC9",
      marginLeft:10,
    },
  });