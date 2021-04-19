import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavInit from './navigation/StackNavigation'
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'
export default function App() {
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <StackNavInit/>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
