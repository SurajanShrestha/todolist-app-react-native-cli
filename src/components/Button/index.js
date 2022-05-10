import React from 'react';
import { Button } from 'react-native-paper';

function CustomButton({
    title,
    onPress,
    mode="contained",
    icon=""
}) {
    return (
        <Button icon={icon} mode={mode} onPress={onPress}>
            {title}
        </Button>
    )
}

export default CustomButton;