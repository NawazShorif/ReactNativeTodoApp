import { Modal, StyleSheet, View } from "react-native";

const ModalComp = ({ visible, children }) => {
    return <Modal visible={visible} animationType="slide" >
        <View style={styles.modalContainer}>
            {children}
        </View>  
    </Modal>;
}
export default ModalComp;


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    }
});