import React, {useState} from 'react'
import { Modal,FlatList, StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';

let items = [
    {from:'loc1', to:'loc2'},
    {from:'loc1', to:'loc2'},
    {from:'loc1', to:'loc2'},
]
export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    return (<>
        <ScrollView style={styles.container}>
            <View style={styles.notificationBox}>
                <Text style={styles.title}>Movement Plan</Text>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.text}><Icon name="user" size={20} color={colors.text_light} /> Driver</Text>
                        <Text style={styles.text}><Icon name="car" size={20} color={colors.text_light} /> Vehicle</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.text}><Icon name="user" size={20} color={colors.text_light} /> John Doe</Text>
                        <Text style={styles.text}><Icon name="car" size={20} color={colors.text_light} /> Rec 001</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>            
                    <Text style={styles.time}><Icon name="hourglass-start" size={20} color={colors.text_light} /> start: 10:00am</Text>
                    <Text style={styles.time}><Icon name="hourglass-end" size={20} color={colors.text_light} /> end: 4:00pm</Text>
                </View>
                <FlatList
                data={items}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.text}><Icon name="map-marker" size={20} color={colors.text_light} /> From: {item.from}</Text>
                            <Text style={styles.text}> To: {item.to}</Text>
                        </View>
                    )
                }} />                
                <View style={styles.buttonView}>            
                    <Pressable style={styles.button}>
                        <Text style={styles.btntext}>Cancel Movement Plan</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.buttonView}>            
                <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.btntext}>Request New Movement</Text>
                </Pressable>
            </View>
            <View style={styles.buttonView}>            
                <Pressable style={styles.button}>
                    <Text style={styles.btntext}>Record Fuel and Odometer</Text>
                </Pressable>
            </View>
        </ScrollView>
        </>
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
    notificationBox: {
        marginHorizontal: 10,
        padding:20,
        marginTop:50,
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
        marginTop:5,
        marginBottom:5,
        fontSize:20,
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