import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavInit from './navigation/StackNavigation'
import {NavigationContainer} from '@react-navigation/native'
export default function App() {
  const checkLogin = () => {console.log("hello")}

  return (
    <NavigationContainer>
      <StackNavInit/>
    </NavigationContainer>
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
