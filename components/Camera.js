import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';

 const Camera = ()=> {
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text>Camera</Text> 
      <View style={[styles.container, {
        flexDirection: "row",
        marginTop: 20,
      }]}>
      
    
      </View>
      
      <Button 
        title="Camera" 
        color="pink" 
        onPress={() => Alert.alert('take a picture')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  
});

export default Camera;