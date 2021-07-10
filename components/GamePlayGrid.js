import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

 const GamePlayGrid = ()=> {
  return (
    <View style={styles.container}>
      
      <View style={styles.grid}>
        <Image source={require('./images/bat.png')} />
        <Image source={require('./images/skull.png')} />
        <Image source={require('./images/witch.png')} />
        <Image source={require('./images/bat.png')} />
        <Image source={require('./images/skull.png')} />
        <Image source={require('./images/witch.png')} />
        <Image source={require('./images/bat.png')} />
        <Image source={require('./images/skull.png')} />
        <Image source={require('./images/witch.png')} />
        <Image source={require('./images/bat.png')} />
        <Image source={require('./images/skull.png')} />
        <Image source={require('./images/witch.png')} />
      </View>
      <Button 
        title="Reset game" 
        color="blue" 
        onPress={() => Alert.alert(' Are you sure you want to reset game')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default GamePlayGrid;