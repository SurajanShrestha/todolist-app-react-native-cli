import React from 'react';
import { Appbar } from 'react-native-paper';

function HeaderBar({
    title='Title',
    subtitle='',
}) {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} subtitle={subtitle} />
        </Appbar.Header>
    )
}

export default HeaderBar;