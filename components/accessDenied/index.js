import { StyleSheet, Text, View } from 'react-native';

// this view will be rendered when unauthorized request happens
const AccessDenied = () => {
    return (
        <View style={styles.accessDeniedContainer}>
            <Text style={styles.accessDeniedText}> Uh oh!! Access Denied!! </Text>
        </View>
    );
}
export default AccessDenied;


const styles = StyleSheet.create({
    accessDeniedContainer: {
        flex: 1,
        backgroundColor: '#311b6b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    accessDeniedText: {
        color: '#FFFFFF',
        fontSize: 18
    }
});