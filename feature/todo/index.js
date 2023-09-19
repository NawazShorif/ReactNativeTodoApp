import { useContext, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AddTodo from './add';
import TodoList from './list';
import { AppContext } from '../../contex';
import AuthHook from '../auth';

const TodoFeature = () => {
    const [addTodoModalVisible, setAddTodoModalVisible] = useState(false); //Initialization  for add todo modal show state 
    const {todoList} = useContext(AppContext); // App context data fetch
    const { authenticateFunc } = AuthHook(); // Custom Auth hook

    const handleAddTodoButton = async () =>{
        setAddTodoModalVisible(true)
        await authenticateFunc();
    }
    return (
        <View style={styles.container} >
            <View style={styles.addTodoBtnWrap}>
                <Button style={styles.addTodoBtn} title='Add new Todo'  onPress={ () => handleAddTodoButton() } />
            </View>
            <AddTodo
                addModalVisiable={addTodoModalVisible}
                setAddModalVisiable={setAddTodoModalVisible}
            />
            <TodoList todoList={todoList} />
        </View>
    );
}

export default TodoFeature;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#311b6b',
    },
    addTodoBtnWrap: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    addTodoBtn: {
        flex: 1
    }
});
