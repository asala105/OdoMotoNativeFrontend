import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import * as Notifications from 'expo-notifications';
import StackSwitcher from './src/navigation/StackSwitcher';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './src/redux/store';
import {updateToken} from './src/redux/slices/tokenSlice'
import api from './src/api'
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    const token = AsyncStorage.getItem("access_token");
    if (token) {
      store.dispatch(updateToken(token))
    }
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <Provider store={store}>
    <StackSwitcher/>
    </Provider>
  );
}
export default App;