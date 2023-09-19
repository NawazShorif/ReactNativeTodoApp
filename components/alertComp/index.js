import { Alert } from "react-native";
// We will use this function when we need to show any alert
export const alertFunc = (title, message) =>
    Alert.alert(title, message, [
        {
            text: 'Cancel',
            style: 'cancel',
        },
        { text: 'OK' },
    ]);