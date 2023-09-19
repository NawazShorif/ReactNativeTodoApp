import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingSpinner = () =>  {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={"#fff"} />
      </View>
    );
}

export default LoadingSpinner;


const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    }
});