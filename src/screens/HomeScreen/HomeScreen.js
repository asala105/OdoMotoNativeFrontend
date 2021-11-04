import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import { colors } from "../../constants/palette";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import MovementPlanForm from '../../components/MovementPlanForm/MovementPlanForm';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import FuelOdometerForm from '../../components/FuelOdometerForm/FuelOdometerForm';
import api from '../../api';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
    const [userType, setUserType] = useState(3);
    const [movement, setMovement] = useState({});
    const [driver, setDriver] = useState({});
    const [vehicle, setVehicle] = useState({});
    const user = useSelector((state) => state?.user);
    function handleCancel(id){
        api.CancelFleetRequest(id)
        .then(response => {
            console.log(response.data);
            setMovement(null);
        })
        .catch(error => {
            console.log(error);
        });
    }
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };

    function getMovement(){
        api.getMovementPlan()
        .then(response => {
            if(response.data.movement!==null) {
            setMovement(response.data.movement);
            setDriver(response.data.movement.driver);
            setVehicle(response.data.movement.vehicle);
            }
            else{
                setDriver(null);
                setVehicle(null);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(()=>{
        getMovement();
    },[]);
    return (<>
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <Header title='Home'/>
            <View style={{padding:10}}>
            {/* {movement===null?
                <View style={styles.notificationBox}>
                    <Text style={styles.title}>Movement Plan</Text>
                    <View style={styles.row}>
                        <Text>No Movement Plans For Today</Text>
                    </View>       
                </View>: */}
                <View style={styles.notificationBox}>
                    <Text style={styles.title}>Movement Plan</Text>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.text}><Icon name="user" size={20} color={colors.darker_teal} /> Driver</Text>
                            <Text style={styles.text}><Icon name="car" size={20} color={colors.darker_teal} /> Vehicle</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.text}> {driver!==null?driver.first_name + " " + driver.last_name:null}</Text> 
                            <Text style={styles.text}> {vehicle!==null?vehicle.registration_code:null}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonView}>            
                        <Text style={styles.time}><Icon name="hourglass-start" size={20} color={colors.text_light} /> start: {movement!==null?movement.start_time:null}</Text>
                        <Text style={styles.time}><Icon name="hourglass-end" size={20} color={colors.text_light} /> end: {movement!==null?movement.end_time:null}</Text>
                    </View>
                    <FlatList
                    data={movement.destinations}
                    keyExtractor={(item,index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.row}>
                                <Text style={styles.text}><Icon name="map-marker" size={20} color={colors.darker_teal} /> From: {item.location_from}</Text>
                                <Text style={styles.text}> To: {item.location_to}</Text>
                            </View>
                        )
                    }} />      
                    {user?.userProfile?.user_type_id!==3?
                    <Button text="Cancel Movement Plan" callback={()=>{handleCancel(movement.id)}}/>:null}     
                </View>
                {user?.userProfile?.user_type_id===3?
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
                                <FuelOdometerForm fleet={movement.id} vehicle={movement.vehicle_id} callback={onClose}/>
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
                                <MovementPlanForm callback={onClose}/>
                            </View>
                        </View>
                    </Modalize>
                </Portal>
                <Button text="Request New Movement Plan" callback={onOpen}/>
            </View>
            }
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