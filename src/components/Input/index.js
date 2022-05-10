import React from 'react';
import { TextInput } from 'react-native-paper';

function CustomInput({
    text,
    changeText,
    mode = 'flat',
}) {
    return (
        <TextInput
            label="Task"
            mode={mode}
            value={text}
            onChangeText={changeText}
        />
    );
}

export default CustomInput;