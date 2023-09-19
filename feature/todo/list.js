import {  FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './item';
// This component responsible for Todo list render.
const TodoList = ({todoList}) => {
    return (
            <View style={styles.todoListContainer} >
                <View style={styles.todoContainerLable} >
                    <Text style={styles.lableText} >Todo :</Text>
                </View>
                {
                    todoList && todoList.length ?
                    <FlatList
                        data={todoList}
                        renderItem={(todoItem) => <TodoItem data={todoItem.item} /> }
                        keyExtractor={item => item.id}
                        alwaysBounceVertical={false}
                    /> : 
                    <View style={styles.noDataWrap}> 
                        <Text style={styles.noData} >No Todo</Text>
                    </View> 
                }
            </View>
    );
}

export default TodoList;

const styles = StyleSheet.create({
    todoListContainer: {
        flex: 8
    },
    todoContainerLable: {
        margin: 8,
        marginHorizontal: 0,
    },
    lableText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    noDataWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noData: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
