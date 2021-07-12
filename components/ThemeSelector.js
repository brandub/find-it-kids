
import React, {useState } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, Text, SafeAreaView } from 'react-native';
import {IMAGES} from '../shared/imagesObj';

 const ThemeSelector = ({navigation})=> {
  const [images, setImages] = useState(IMAGES);
  

  const createThemeArray = images.flatMap(thm => thm.themeTag )
   
  
  const noDuplicateThemeArray = [...new Set(createThemeArray)]

    
  console.log(noDuplicateThemeArray)
  

  const renderTheme = ({ item }) => (
    <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
      <Button
  onPress={() => navigation.navigate('Game Play')}
  title={item}
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            </View>
  );
  
  return (
    
      
      <SafeAreaView>
    
      <FlatList
        data={noDuplicateThemeArray}
        renderItem={renderTheme}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => item.key}
      />
     
      <Button 
        title="Create a Theme" 
        color="green"
        onPress={() => navigation.navigate('Create Theme')}  />
      <Button 
        title="Load Game" 
        color="red" 
        onPress={() => navigation.navigate('Game Play')} />
      
    
    </SafeAreaView>
      
    
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