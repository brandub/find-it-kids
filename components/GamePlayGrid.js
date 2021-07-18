import React, {useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { baseUrl } from '../shared/baseUrl'



 const GamePlayGrid = ({route, navigation})=> {
  const [toggleImg, setToggleImg] = useState(1);
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

  

  const themeId = route.params.themeId;
  const theme = images.filter(theme => [...theme.themeTag].includes(themeId))
  console.log(theme)

  const renderItem = ({ item }) => (
    <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 5
            
            }}>
    <TouchableOpacity style={{  opacity: toggleImg, 
              alignItems: 'center'}}
    onPress={() => setToggleImg(.2)}
      onLongPress={() => setToggleImg(1)}>
      

      <Image style={{width: 100, height: 100, justifyContent: 'center',
              alignItems: 'center'}}
              source={{
                uri: item.src,
              }}
            />
            </TouchableOpacity> 
            
            </View>
  );
  
  return (
    
      
      <SafeAreaView style={styles.container}>
    
      <FlatList
        data={theme}
        renderItem={renderItem}
        //Setting the number of column
        numColumns={3}
        keyExtractor={item => item.id}
      />
     <Button title="Change Theme" color="orange"
      onPress={() => navigation.navigate('Theme')}  />
     <Button 
     style={styles.fixToText}
      title="Reset game" 
      color="purple" 
      onPress={() => Alert.alert(' Are you sure you want to reset game')}/>
    
 
    </SafeAreaView>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  
});

export default GamePlayGrid;