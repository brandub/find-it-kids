import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
//add inputs
 const CreateTheme = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Create a theme</Text> 
     
       <Button 
        title="Add image camera" 
        color="blue" 
        onPress={() => navigation.navigate('Camera')} />
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