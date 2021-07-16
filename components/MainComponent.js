import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import GamePlayGrid from './GamePlayGrid';
import CreateTheme from './CreateTheme';
import Camera from './Camera';




 const Main = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Find it Kids!</Text>
      <Text>A scavenger hunt for kids</Text>
      <Button title="Start" color="purple"
      onPress={() => navigation.navigate('Theme')}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    
    justifyContent: 'center',
  },
});

export default Main;