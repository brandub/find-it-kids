import React, {useState } from 'react';
import { StyleSheet, FlatList, View, Button, Alert, Image, SafeAreaView } from 'react-native';
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
        data={theme}
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