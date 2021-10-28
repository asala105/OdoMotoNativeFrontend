import React, {useState, useRef} from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import MovementPlanForm from '../../components/MovementPlanForm/MovementPlanForm';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import FuelOdometerForm from '../../components/FuelOdometerForm/FuelOdometerForm';

let items = [
    {from:'loc1', to:'loc2'},
    {from:'loc1', to:'loc2'},
    {from:'loc1', to:'loc2'},
]
export default function HomeScreen() {
    const [userType, setUserType] = useState(3);

    function handleCancel(){
        console.log('cancel')
    }
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    return (<>
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <Header title='Home'/>
            <View style={styles.notificationBox}>
                <Text style={styles.title}>Movement Plan</Text>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.text}><Icon name="user" size={20} color={colors.darker_teal} /> Driver</Text>
                        <Text style={styles.text}><Icon name="car" size={20} color={colors.darker_teal} /> Vehicle</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.text}> John Doe</Text>
                        <Text style={styles.text}> Rec 001</Text>
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
                            <Text style={styles.text}><Icon name="map-marker" size={20} color={colors.darker_teal} /> From: {item.from}</Text>
                            <Text style={styles.text}> To: {item.to}</Text>
                        </View>
                    )
                }} />      
                {userType!==3?
                <Button text="Cancel Movement Plan" callback={handleCancel}/>:
                <></>}          
            </View>
                {userType===3?
                <View>
                <Portal>
                    <Modalize ref={modalizeRef} style={{ backgroundColor: colors.card_background}}>
                        <View style={{margin:15}}>
                            <View style={{ padding: 20, flexDirection:'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={styles.title}>Record Fuel And Odometer</Text>
                                </View> 
                            </View>
                            <View>
                                <FuelOdometerForm/>
                            </View>
                        </View>
                    </Modalize>
                </Portal>
                <Button text="Record Fuel And Odometer" callback={onOpen}/>
                </View>:
                <View>
                <Portal>
                    <Modalize ref={modalizeRef} style={{ backgroundColor: colors.card_background}}>
                        <View style={{margin:15}}>
                            <View style={{ padding: 20, flexDirection:'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={styles.title}>Request A New Movement Plan</Text>
                                </View> 
                            </View>
                            <View>
                                <MovementPlanForm/>
                            </View>
                        </View>
                    </Modalize>
                </Portal>
                <Button text="Request New Movement Plan" callback={onOpen}/>
            </View>
}
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
        color: colors.text
    },
    col:{
        alignItems: 'flex-start',
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