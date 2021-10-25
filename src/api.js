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
        let token = {ExpoToken : expo_token};
        let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/register_for_notifications`, token, header);
        return res;
    },

/*     logout: async () =>{
    let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/logout`, header);
        return res;
    },
    register: (data) =>
    axios.post(`${BASE_URL}/register`, data),

    update: async (data) =>{
    let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/update_profile`, data, header);
        return res;
    },

    getNotifications: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_notifications`, header);
        return res;
    },

    getUserData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/user_profile`, header);
        return res;
    },

    getAllUsers: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/feed`, header);
        return res;
    },

    getAllFavs: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_favs`, header);
        return res;
    },

    tapUser: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/tap/${id}`, header);
        return res;
    },

    blockUser: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/block/${id}`, header);
        return res;
    } */
}