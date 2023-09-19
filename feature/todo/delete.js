import { Button, Image, StyleSheet, Text, View } from 'react-native';
import ModalComp from '../../components/modal';
import { useContext} from 'react';
import { AppContext } from '../../contex';
// This component responsible for delete a todo.
const DeleteTodo = ({ deleteModalVisiable, setDeleteModalVisiable, data }) => {
    const { todoList, setTodoList } = useContext(AppContext);


    const handleDeleteConfirmBtn = () => {
        let tempTodoList =  todoList.filter((todo)=>(todo.id !== data.id))
        setTodoList(tempTodoList);
        setDeleteModalVisiable(false);
    }
    return (
        <ModalComp visible={deleteModalVisiable}>
            <View style={styles.confirmArea} >
                <Image
                    style={styles.image}
                    source={require('../../assets/favicon.png')}
                />
                <Text style={styles.confirmText} >Are you sure to delete ?</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' onPress={()=> setDeleteModalVisiable(false)} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='CONFIRM' onPress={handleDeleteConfirmBtn} color="#b180f0" />
                    </View>
                </View>
            </View>
        </ModalComp>
    );
}

export default DeleteTodo;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    confirmArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    confirmText: {
        color: '#FFFFFF',
        width: '100%',
        padding: 16,
        fontSize: 18
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
