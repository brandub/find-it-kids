import React, {useState } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, SafeAreaView } from 'react-native';
import {IMAGES} from '../shared/imagesObj';


 const GamePlayGrid = ()=> {
  const [images, setImages] = useState(IMAGES);
  const renderItem = ({ item }) => (
    <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
      <Image
              style={styles.imageThumbnail}
              source={{
                uri: item.src,
              }}
            />
            </View>
  );
  
  return (
    
      
      <SafeAreaView>
    
      <FlatList
        data={images}
        renderItem={renderItem}
        //Setting the number of column
        numColumns={3}
        keyExtractor={item => item.id}
      />
     
      <Button 
        title="Reset game" 
        color="blue" 
        onPress={() => Alert.alert(' Are you sure you want to reset game')} />
    
 
    </SafeAreaView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
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