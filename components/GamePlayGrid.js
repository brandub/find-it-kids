import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

 const GamePlayGrid = ()=> {
  return (
    <View style={styles.container}>
      <Text>Find it game grid!</Text> 
     
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
  },
  
});

export default GamePlayGrid;