import React, {useState } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, SafeAreaView, TouchableOpacity} from 'react-native';

import {IMAGES} from '../shared/imagesObj';


 const GamePlayGrid = ({route, navigation})=> {
  const [images, setImages] = useState(IMAGES);

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
    <TouchableOpacity 
    onPress={() => Alert.alert('image clicked')}>     
      <Image
              style={styles.imageThumbnail}
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
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    
    
  },
  
  

  
});

export default GamePlayGrid;