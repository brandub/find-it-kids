
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

 const ThemeSelector = ()=> {
  return (
    <View style={styles.container}>
      <Text>Choose a theme</Text>
      <Button 
        title="Create a Theme" 
        color="green"
        onPress={() => Alert.alert(' Are you sure you want to create a theme?')}  />
      <Button 
        title="Load More" 
        color="red" 
        onPress={() => Alert.alert('Loading more themes')} />
      
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