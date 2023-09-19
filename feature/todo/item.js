import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UpdateTodo from './edit';
import DeleteTodo from './delete';
import AuthHook from '../auth';

// This component responsible for single todo item render.
// Edit & delete button button function initiation 
const TodoItem = ({ data }) => {
    const [updateModalVisiable, setUpdateModalVisiable] = useState(false);
    const [deleteModalVisiable, setDeleteModalVisiable] = useState(false);

    const { authenticateFunc } = AuthHook(); // Custom Auth hook

    const handleEditTodoButton = async () => {
        setUpdateModalVisiable(true);
        await authenticateFunc()
    }

    const handleDeleteTodoButton = async () => {
        setDeleteModalVisiable(true);
        await authenticateFunc()

    }


    return (
        <View style={styles.todoItem}>
            <View style={styles.todoTitleWrap} >
                <Text style={styles.todoTitle} > {data.text} </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => handleEditTodoButton()}
                    style={styles.imageWrap}
                >
                    {({ pressed }) => (
                        <Image
                            style={styles.image}
                            source={require('../../assets/edit.png')}
                        />
                    )}
                </Pressable>
                <Pressable
                    onPress={() => handleDeleteTodoButton(true)}
                    style={styles.imageWrap}
                >
                    {({ pressed }) => (
                        <Image
                            style={styles.image}
                            source={require('../../assets/delete.png')}
                        />
                    )}
                </Pressable>
            </View>
            <UpdateTodo
                updateModalVisiable={updateModalVisiable}
                setUpdateModalVisiable={setUpdateModalVisiable}
                data={data}
            />
            <DeleteTodo
                deleteModalVisiable={deleteModalVisiable}
                setDeleteModalVisiable={setDeleteModalVisiable}
                data={data}
            />
        </View>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    todoItem: {
        margin: 8,
        marginHorizontal: 0,
        flexDirection: 'row'
    },
    todoTitleWrap: {
        flex: 4,
        backgroundColor: '#5E0ACC',
        padding: 8,
        borderRadius: 6,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoTitle: {
        color: 'white'
    },
    imageWrap: {
        flex: 1,
        height: 25,
        width: 25
    },
    image: {
        flex: 1,
        height: 35,
        width: 35,
        objectFit: 'contain'
    }
});
