
import React, {useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, Text, SafeAreaView } from 'react-native';
import { baseUrl } from '../shared/baseUrl'


 const ThemeSelector = ({navigation}) => {
  const [images, setImages] = useState([]);
  
  
  useEffect(() => {
	fetch(baseUrl + 'images')
			.then((response) => response.json())
			.then((data) => {
				setImages(data) // new
			})
      .catch((error) => {
        console.error('Error:', error);
      });
	}, [])

console.log(images)
  const createThemeArray = images.flatMap(thm => thm.themeTag )
   
  
  const noDuplicateThemeArray = [...new Set(createThemeArray)]

    
  console.log(noDuplicateThemeArray)
  

  const renderTheme = ({ item }) => (
    
    <View
            style={{
              
              flexDirection: 'column',
              margin: 4,
              flexWrap: "wrap",
              
              
              
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
        //Setting the number of columns
        numColumns={3}
        keyExtractor={(item, index) => index}
        
      />
     
      <Button 
        title="Create a Theme" 
        color="green"
        onPress={() => navigation.navigate('Create Theme')} 
        />
      
    
    </SafeAreaView>
      
    
  );
   
  
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    
    
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  
});

export default ThemeSelector;