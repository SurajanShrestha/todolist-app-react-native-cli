import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { FAB } from 'react-native-paper';
import HeaderBar from '../components/Header';
import { PRIMARY_COLOR } from '../config/styling';

function Home() {
    return (
        <View style={{ height: '100%' }}>
            <HeaderBar title='Create Your Todo' />
            <View style={styles.mainBody}>
                <Text>Create Your Todo!!!</Text>
            </View>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
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
    }
})

export default Home;