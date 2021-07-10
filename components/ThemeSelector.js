
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

 const ThemeSelector = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Choose a theme</Text>
      <Button 
        title="Create a Theme" 
        color="green"
        onPress={() => navigation.navigate('Create Theme')}  />
      <Button 
        title="Load More" 
        color="red" 
        onPress={() => navigation.navigate('Game Play')} />
      
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

export default ThemeSelector;