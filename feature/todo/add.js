import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import ModalComp from '../../components/modal';
import { useContext, useState } from 'react';
import { AppContext } from '../../contex';
import { alertFunc } from '../../components/alertComp';

// This component responsible for add new todo.
const AddTodo = ({ addModalVisiable, setAddModalVisiable }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const { todoList, setTodoList } = useContext(AppContext);

    const handleChange = (enteredText) => {
        setEnteredTitle(enteredText);
    }

    const handleCancleBtn = () => {
        setEnteredTitle('');
        setAddModalVisiable(false);
    }

    const handleSaveBtn = () => {
        if(enteredTitle){
            setTodoList([...todoList, { text: enteredTitle, id: Math.random().toString() }]);
            setEnteredTitle('');
            setAddModalVisiable(false);
        }else{
            alertFunc('Alert', `Todo title can't be empty.`)
        }


    }

    return (
        <ModalComp visible={addModalVisiable}>
            <View style={styles.inputArea} >
                <View style={styles.imageWrap}>
                <Image
                    style={styles.image}
                    source={require('../../assets/favicon.png')}
                />
                </View>
                <TextInput value={enteredTitle} style={styles.textInput} onChangeText={handleChange} placeholder='Please type todo title' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' onPress={handleCancleBtn} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='SAVE' onPress={handleSaveBtn} color="#b180f0" />
                    </View>
                </View>
            </View>
        </ModalComp>
    );
}

export default AddTodo;

const styles = StyleSheet.create({
    imageWrap:{
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    inputArea: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        width: '100%',
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
