import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { customTheme } from './src/config/styling';
import Home from './src/screens';

const App = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <PaperProvider theme={customTheme}>
      {/* SafeAreaView is only applicable on ios devices */}
      <SafeAreaView>
        <StatusBar barStyle='light-content' />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={{ minHeight: windowHeight }}>
            <Home />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
