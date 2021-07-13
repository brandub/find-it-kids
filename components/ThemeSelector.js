
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
              margin: 2
            }}>
      <Button
  onPress={() => navigation.navigate('Game Play', { themeId: item })}
  title={item}
  color="#841584"
  accessibilityLabel="Selects the theme and loads the game."
/>
            </View>
  );
  
  return (
    
      
      <SafeAreaView style={styles.container}>
    
      <FlatList
        data={noDuplicateThemeArray}
        renderItem={renderTheme}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item) => item.key}
        
      />
     
      <Button 
        title="Create a Theme" 
        color="green"
        onPress={() => navigation.navigate('Create Theme')}  />
      
    
    </SafeAreaView>
      
    
  );
   
  
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
  
});

export default ThemeSelector;