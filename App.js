import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import * as Notifications from 'expo-notifications';
import StackSwitcher from './src/navigation/StackSwitcher';
import BottomNav from './src/navigation/BottomNav';
import AuthNav from './src/navigation/AuthNav';
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
    <BottomNav />
  );
}
export default App;