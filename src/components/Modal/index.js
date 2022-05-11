import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Portal,
    Modal,
} from 'react-native-paper';
import CustomInput from '../Input';
import CustomButton from '../Button';

function CustomModal({
    visible,
    hideModal,
    text,
    changeText,
    addTodo,
}) {

    const handleAdd = (text) => {
        addTodo(text);
        changeText("");
    };

    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                <CustomInput text={text} changeText={changeText} mode="outlined" />
                <View style={styles.btnContainer}>
                    <CustomButton title="Add" onPress={() => handleAdd(text)} icon="plus" />
                </View>
            </Modal>
        </Portal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    }
});

export default CustomModal;