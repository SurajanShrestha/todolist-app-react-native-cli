import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    FAB,
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

    return (
        <View style={{ height: '100%' }}>
            <HeaderBar title='Create Your Todo' />
            <View style={styles.mainBody}>
                <Text>Create Your Todo!!!</Text>
            </View>
            {console.log(text)}
            {console.log(todo)}
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
})

export default Home;