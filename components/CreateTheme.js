import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
//add inputs
 const CreateTheme = ()=> {
  return (
    <View style={styles.container}>
      <Text>Create a theme</Text> 
     
      <Button 
        title="Add image camera" 
        color="blue" 
        onPress={() => Alert.alert(' add images from camera')} />
        <Button 
        title="Add image gallery" 
        color="gray" 
        onPress={() => Alert.alert(' add images from gallery')} />
      
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

export default CreateTheme;