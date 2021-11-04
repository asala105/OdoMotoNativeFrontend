import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { cond } from 'react-native-reanimated';
import registerForPushNotificationsAsync from './screens/LoginScreen/login';
const BASE_URL = 'https://odomoto.tk/api';

const cookie = AsyncStorage.getItem("access_token");

async function getHeader() {
    var JWTtoken = await AsyncStorage.getItem("access_token");
    const token = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JWTtoken,
            'Access-Control-Allow-Origin': '*'
        },
    };
    return token;
}

export default{

    login: (data) =>
    axios.post(`${BASE_URL}/login`, data),

    resetPass: async (data) =>{
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/reset_password`, data, header);
        return res;
    },

    registerExpoToken: async () =>{
        let expo_token = await registerForPushNotificationsAsync();
        registerForPushNotificationsAsync().then(token => expo_token=token);
        let token = {ExpoToken : expo_token};
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/register_for_notifications`, token, header);
        return res;
    },

    getNotifications: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_notifications`, header);
        return res;
    },

    getMovementPlan: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/view_movement`, header);
        return res;
    },

    CancelFleetRequest: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/cancel_fleet/${id}`, header);
        return res;
    },

    SendFleetRequest: async (data) =>{
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/fleet_request`,data, header);
        return res;
    },

    AddDestination: async (data, id) =>{
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/add_destination/${id}`,data, header);
        return res;
    },
    
    AddFuelOdomoter: async (data, fleet_id, vehicle_id) =>{
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/add_trip_fuel_odometer/${fleet_id}/${vehicle_id}`,data, header);
        return res;
    },

    GetInspectionTask: async (date) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_tasks/${date}`, header);
        return res;
    },

    MarkInspectionTaskDone: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/mark_task_done/${id}`, header);
        return res;
    },
    
    GetLeavesData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_leaves_record`, header);
        return res;
    },

    RequestLeave: async (data) =>{
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/leave_request`, data, header);
        return res;
    },

    GetAttendanceData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_attendance_record`, header);
        return res;
    },

    RegisterAttendance: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/register_attendance`, header);
        return res;
    },

    FinalizeAttendance: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/finalize_attendance`, header);
        return res;
    },

    getUserData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/user_profile`, header);
        return res;
    },

    Logout: async () =>{
    let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/logout`, header);
        return res;
    },
}