import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    FAB,
    List,
} from 'react-native-paper';
import HeaderBar from '../components/Header';
import CustomModal from '../components/Modal';

function Home() {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [text, setText] = React.useState("");

    const changeText = (text) => {
        setText(text);
    };

    const [todo, setTodo] = React.useState([]);

    const addTodo = (task) => {
        setTodo(todo => [...todo, task]);
    }

    const removeTodo = (index) => {
        setTodo(todo => {
            let updatedTodo = todo.filter((item, i) => {
                return i !== index;
            });
            setTodo(updatedTodo);
        })
    }

    return (
        <View style={{ height: '100%' }}>
            <HeaderBar title='Create Your Todo' />
            <View style={styles.mainBody}>
                {todo?.map((item, index) => (
                    <List.Item
                        title={item}
                        description=""
                        left={props => <List.Icon {...props} icon="text-box-outline" />}
                        // right={props => <List.Icon {...props} icon="check-all" color='forestgreen' /* style={styles.listDoneBtn} */ />}
                        onPress={() => removeTodo(index)}
                        key={index}
                    />
                ))}
            </View>
            <CustomModal visible={visible} hideModal={hideModal} text={text} changeText={changeText} addTodo={addTodo} />
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => showModal()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 60,
    },
    mainBody: {
        paddingHorizontal: 20,
    },
    listDoneBtn: {
        borderWidth: 1,
        borderColor: 'forestgreen',
        borderRadius: 100,
        padding: 0,
    }
})

export default Home;