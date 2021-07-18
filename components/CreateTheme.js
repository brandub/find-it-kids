import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ImageGrabber from './ImageGrabber';
import Camera from './Camera';
//add inputs
 const CreateTheme = ({navigation})=> {
  return (
    <View style={styles.container}>
      
     <View  style={styles.container}>
     <Camera />
     </View>
       <View  style={styles.container}>
       <ImageGrabber />
       </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10

  },
  
});

export default CreateTheme;